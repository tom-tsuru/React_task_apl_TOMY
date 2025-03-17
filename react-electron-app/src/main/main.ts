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
      details TEXT,
      status TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
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
  status: string;
}

// ---タスク追加のための関数--- //
function addTaskToDB(task: Task) {
  const { name, project, deadline, priority, details, status } = task;
  const query = `INSERT INTO tasks (name, project, deadline, priority, details, status) VALUES (?, ?, ?, ?, ?, ?)`;

  db.run(query, [name, project, deadline, priority, details, status], (err) => {
    if (err) {
      console.error('Error inserting task:', err);
    } else {
      console.log('Task added successfully');
      console.log(name);
      console.log(project);
      console.log(deadline);
      console.log(priority);
      console.log(details);
      console.log(status);
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

// ---タスク取得のための関数--- //
function getTasksFromDB() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id, name, project, deadline, priority, details, status, DATE(created_at) AS created_at FROM tasks'
    db.all(query, (err, rows) => {
      if (err) {
        reject('Error retrieving tasks');
      } else {
        resolve(rows);
      }
    })
  })
}

// レンダラープロセスからタスク取得リクエストを受け取る
ipcMain.handle('get-task', async () => {
  try {
    const tasks = await getTasksFromDB();
    return tasks;
  } catch (err) {
    console.error('Error getting tasks:', err);
    throw new Error('タスクの取得に失敗しました');
  }
});

// ---タスク編集のための関数--- //
function editTaskInDB(id: number, task: Task): Promise<void> {
  return new Promise((resolve, reject) => {
    const { name, project, deadline, priority, details, status } = task;
    const query = `UPDATE tasks 
                   SET name = ?, project = ?, deadline = ?, priority = ?, details = ?, status = ? 
                   WHERE id = ?`;

    db.run(query, [name, project, deadline, priority, details, status, id], function(err) {
      if (err) {
        reject('タスクの更新に失敗しました');
      } else {
        resolve();
      }
    });
  });
}

// タスク編集
ipcMain.handle('edit-task', async (_event, id: number, task: Task) => {
  try {
    // idを使ってタスクを削除する処理
    await editTaskInDB(id, task);

    // 削除後の最新のタスクリスト取得
    const updateTasks = await getTasksFromDB();

    return updateTasks;
  } catch (err) {
    console.error('タスク編集に失敗',err);
    throw new Error('タスク編集に失敗');
  }
})

// ---タスク削除のための関数--- //
function deleteTaskFromDB(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    // SQL分を使ってタスク削除
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.run(query, [id], function(err) {
      if(err) {
        reject('タスクの削除に失敗');
      } else {
        resolve();
      }
    });
  });
}

// タスク削除
ipcMain.handle('delete-task', async (_event,id) => {
  try {
    // idを使ってタスクを削除する処理
    await deleteTaskFromDB(id);

    // 削除後の最新のタスクリスト取得
    const updateTasks = await getTasksFromDB();

    return updateTasks;
  } catch (err) {
    console.error('タスク削除に失敗',err);
    throw new Error('タスク削除に失敗');
  }
})

// ウィンドウ作成とアプリの起動
function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 1000,
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
