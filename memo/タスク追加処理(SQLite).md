# SQLiteを用いたタスク追加処理
## SQLiteライブラリのインストール
```
  npm install better-sqlite3
```

## ディレクトリ構成
![image](http://ghe.nanao.co.jp/storage/user/287/files/ec8bf42f-9cb0-4640-9ec0-9725a58760c0)

## 手順
1. 必要なパッケージのインストール
2. バックエンド構築：SQLiteを操作するAPIを構築
3. データベース作成：タスク情報を保存するSQLiteテーブルを作成
4. フロントエンド構築：ReactでAPIと連携し、タスクの表示・編集を実装


## 1. 環境準備
Reactでデータベースを直接操作するのは難しい。そのためSQLiteを操作するバックエンドをNode.jsで構築する
### パッケージインストール
- express：バックエンドAPIを構築
- better-sqlite3：SQLiteデータベースを操作する
- @types/express：TypescriptでExpressの型補完を利用するため
- @types/node：Node.jsの型補完を利用するため

```
npm install express better-sqlite3
npm install --save-dev @types/express @types/node
```

## 2. バックエンド構築
- ファイル構成
  image](http://ghe.nanao.co.jp/storage/user/287/files/b85a487f-80fa-4eeb-aa51-697472dc2879)


## 問題解決
### vite実行時、ページが見つからないエラー出現
- vite.config.tsにてdefineConfig内でrootを正しく設定したら解決した
  ```
    root: "src/renderer",
  ```
