# SQLiteを用いたタスク追加処理
## SQLiteライブラリのインストール
```
  npm install better-sqlite3
```

## ディレクトリ構成
![image](http://ghe.nanao.co.jp/storage/user/287/files/ec8bf42f-9cb0-4640-9ec0-9725a58760c0)

## 手順
1. 必要なパッケージのインストール
2. バックエンド構築：SQLiteを操作するAPIを構築(electron)
3. データベース作成：タスク情報を保存するSQLiteテーブルを作成
4. フロントエンド構築：ReactでAPIと連携し、タスクの表示・編集を実装


## 1. 環境準備
Reactでデータベースを直接操作するのは難しい。そのためSQLiteを操作するバックエンドをNode.jsで構築する
### パッケージインストール
- better-sqlite3：SQLiteデータベースを操作する

```
npm install express better-sqlite3
npm install --save-dev @types/express @types/node
```

## 2. バックエンド構築
- electron


## 問題解決
### vite実行時、ページが見つからないエラー出現
- vite.config.tsにてdefineConfig内でrootを正しく設定したら解決した
  ```
    root: "src/renderer",
  ```
  
### tsc -bが実行されない
- tsc -b単独で実行し、成功するが、npm run buildでは実行されない。また、build実行するとtsc -b単独でも動作しなくなる。なぜ？
→tsc --build --cleanでキャッシュ削除したら単独ではうごいた！でもbuildでは実行されない
  - 変更点
    - tsconfig.app/node.jsonのnoEmitをfalseに変更

### electronで表示されない
