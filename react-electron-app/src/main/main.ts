import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __filenameと__dirnameをエミュレート
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

interface Task{
  name: string;
  project: string;
  deadline: string;
  priority: number;
  details: string;
}

// タスク追加のための関数
function addTaskToDB(task: Task) {
  const { name, project, deadline, priority, details } = task;
  const query = `INSERT INTO tasks (name, project, deadline, priority, details) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [name, project, deadline, priority, details], (err) => {
    if (err) {
      console.error('Error inserting task:', err);
    } else {
      console.log('Task added successfully');
      console.log(name);
      console.log(project);
      console.log(deadline);
      console.log(priority);
      console.log(details);
    }
  });
}

// レンダラープロセスからタスク追加リクエストを受け取る
ipcMain.handle('add-task', (_event, task: Task) => {
  return new Promise((resolve, reject) => {
    try {
    addTaskToDB(task);
    resolve('タスクが追加されました');
    }catch (err) {
    console.error('Error adding task:', err);
    reject('タスク追加に失敗しました');
    }
  });
});

// ウィンドウ作成とアプリの起動
function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 910,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
      devTools: true,
      sandbox: false, // セキュリティ強化
    },
  });
  const preloadPath = path.join(__dirname, 'preload.mjs');
  console.log('Preload path:', preloadPath);
  
  win.loadURL('http://localhost:5173'); // ReactのデフォルトURL
  // win.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(createWindow);
