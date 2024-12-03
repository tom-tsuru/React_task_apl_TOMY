# Reactを使ったタスク管理アプリ
## 使用言語
- フロントエンド
  - TypeScript+React
- バックエンド 
  - 未定
  - chat GPT候補
    - Node.js + Express
    - Firebase (バックエンド as a Service)
    - Django + Python (REST API)
- データベース
  - 未定
  - chat GPT候補
    - SQLite
    - Firebase Firestore
    - PostgreSQL / MySQL
## 作業場所
  開発は本リポジトリで行う。作業完了後GitHub(クラウドサービス)にPUSHする
## 仕様検討
### 必須機能
- アラーム機能
- PC起動時、ソフト起動 
- 日付変更(自動更新)
- プロジェクト名等の選択(事前登録)
- Outlookからカレンダー予定を読み取り、表示
- タスク検索機能
- ホットキーからソフト起動
- 完了タスクのデータ保持
- タスク作成日/開始日/完了日/実行日数等の自動表示
- タスク移動のドラッグ/ドロップ機能
- 期限が迫った時の通知バー
- 自動的に優先度>日付>プロジェクト名あいうえお順上から表示
### 検討機能
- タスクに焦点あてるとレビュー画面が見れる
- GHEのissueに自分が追加されたら自動でタスクに追加され、URLを参照できる機能
- カスタムビュー
## GUI検討
- ToDo/Doing/Doneにタスクを分ける
- タスクの追加/削除
- タスクはスライドで状態変更もできるし、タスク内で移動することも可
- タスク状態の色分け
- Outlookの予定表示
- お遊び要素なんかいれたい
- ライトモード・ダークモード切替
## イメージ図
<div align="center">
  <img src="./task-apl-img.drawio.svg" width="90%"><br><br>
</div>

## 現状(2024/12/03)
<img src="http://ghe.nanao.co.jp/storage/user/287/files/a944afee-023c-4f01-abde-310cd0d0b60a" width="60%" />
<img src="http://ghe.nanao.co.jp/storage/user/287/files/a814bd00-1eb6-47e1-889a-4e4b32b0c260" width="60%" />
