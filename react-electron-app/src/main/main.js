const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// SQLiteデータベースの作成/接続
const db = new sqlite3.Database(path.join(__dirname, 'tasks.db'), (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  } else {
    console.log('Database connected');
    
    // タスクテーブルがなければ作成
    db.run(`CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      project TEXT,
      deadline TEXT,
      priority INTEGER,
      details TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Table created or already exists');
      }
    });
  }
});

// タスク追加のための関数
function addTaskToDB(task) {
  const { name, project, deadline, priority, details } = task;
  const query = `INSERT INTO tasks (name, project, deadline, priority, details) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [name, project, deadline, priority, details], (err) => {
    if (err) {
      console.error('Error inserting task:', err);
    } else {
      console.log('Task added successfully');
    }
  });
}

// レンダラープロセスからタスク追加リクエストを受け取る
ipcMain.handle('add-task', task => {
  return new Promise((resolve, reject) => {
    addTaskToDB(task);
    resolve('タスクが追加されました');
  }).catch((err) => {
    console.error('Error adding task:', err);
    reject('タスク追加に失敗しました');
  });
});

// ウィンドウ作成とアプリの起動
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL('http://localhost:5173'); // ReactのデフォルトURL
}

app.whenReady().then(createWindow);
