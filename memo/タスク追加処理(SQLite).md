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
- 設定の問題

### Preloadが読み込まれない
- ESモジュールの場合、拡張子を.mjsにしなければいけない
- 参照：[Electron での ES Modules (ESM)](https://www.electronjs.org/ja/docs/latest/tutorial/esm#:~:text=%E3%83%AC%E3%83%B3%E3%83%80%E3%83%A9%E3%83%BC%E3%81%AE%E3%83%97%E3%83%AA%E3%83%AD%E3%83%BC%E3%83%89%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%81%AF%E3%80%81%20%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8C%E3%81%B0%20Node.js%20%E3%81%AE%20ESM%20%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20ESM%20%E3%81%8C%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%81%AF%E3%80%81%E3%83%AC%E3%83%B3%E3%83%80%E3%83%A9%E3%83%BC%E3%81%AE,contextIsolation%20%E3%81%AE%E8%A8%AD%E5%AE%9A%E5%80%A4%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E6%B1%BA%E3%81%BE%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%BE%E3%81%9F%E3%80%81ESM%20%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BF%E3%81%AE%E9%9D%9E%E5%90%8C%E6%9C%9F%E7%9A%84%E3%81%AA%E6%80%A7%E8%B3%AA%E3%81%AB%E8%B5%B7%E5%9B%A0%E3%81%99%E3%82%8B%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85%E3%81%8C%E3%81%84%E3%81%8F%E3%81%A4%E3%81%8B%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20ESM%20%E3%81%AE%E3%83%97%E3%83%AA%E3%83%AD%E3%83%BC%E3%83%89%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%81%AF%E6%8B%A1%E5%BC%B5%E5%AD%90%E3%81%8C%20.mjs%20%E3%81%A7%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93)
![image](http://ghe.nanao.co.jp/storage/user/287/files/a4025192-2c40-4d25-a4bc-fe6a7e02d189)

#### .mjsに変換するには
- 方法1：手動でdist内のプリロードを.mjsに変える
- package.jsonにPower Shell(Windows)で.jsを.mjsに変換する処理を追加。また、再ビルドする時用に、最初に.mjsを削除する処理も追加

