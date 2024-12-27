# Reactを使ったタスク管理アプリ
## 使用言語
- フロントエンド
  - Vite+TypeScript+React
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

## 進捗(2024/12/18)
- material UI活用してタスク追加画面のUI作成
- 内容クリア/削除機能は実装
<img src="http://ghe.nanao.co.jp/storage/user/287/files/e19ea68c-1820-4ef0-bc72-0f8627c17f5a" width="80%">
<img src="http://ghe.nanao.co.jp/storage/user/287/files/f9ba72f4-eb20-43e7-a388-20eaf2cd5468" width="80%">

## やること
- electron調べる
- 値を保持して表示する方法調べる
