import Database from 'better-sqlite3';

export default class DatabaseHandler {
    private db: Database.Database;

    constructor() {
        this.db = new Database('tasks.db'); // SQLite データベースファイル
        this.initialize();
    }

    private initialize() {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            project TEXT,
            deadline TEXT,
            priority INTEGER,
            details TEXT,
            added_date TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `;
        this.db.exec(createTableQuery);
    }

    // 全タスク取得
    getAllTasks() {
        const stmt = this.db.prepare('SELECT * FROM tasks');
        return stmt.all();
    }

  // タスク追加
    addTask(name: string, project: string, deadline: string, priority: number, details: string) {
        const stmt = this.db.prepare(`
            INSERT INTO tasks (name, project, deadline, priority, details) 
            VALUES (?, ?, ?, ?, ?)
        `);
        return stmt.run(name, project, deadline, priority, details);
    }

    // タスク編集
    updateTask(id: number, name: string, project: string, deadline: string, priority: number, details: string) {
        const stmt = this.db.prepare(`
            UPDATE tasks 
            SET name = ?, project = ?, deadline = ?, priority = ?, details = ? 
            WHERE id = ?
        `);
        return stmt.run(name, project, deadline, priority, details, id);
    }
}
