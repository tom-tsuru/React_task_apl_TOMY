# Reactメモ
今回作成するタスク管理アプリで使用したReactメモ
### モーダルウィンドウの作成手順
1. クリックボタンの作成
  ```
    <div>
      <button className='TaskButton'>Add</button>
     </div>
  ```
2. オーバーレイの要素を追加
    - オーバーレイ：モーダルウィンドウが開いたときにブラウザ全体を覆う薄暗い幕の要素
  ```
    <div className='modal-overlay'></div>
  ```
  ```
    /* CSS */
    .modal-overlay {
      /* 画面残帯を覆う */
      position:fixed; 
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.5);
      /* 画面の中央に要素を表示 */
      display:flex;
      justify-content:center;
      align-items:center;
      z-index: 1000; /* 他の要素よりも手前に */
      /* positionをfixedにするとbutton要素よりも重ね順が上となるため、z-index設定はなくてもよい */
   ```

3. コンテンツの追加
  設定したオーバーレイの中にコンテンツを追加。
  ```
    <div className='modal-overlay'>
      <div className='modal-content'>
        -コンテンツの中身記載-
      </div>
    </div>
  ```
  
4. Modalの表示非表示設定
  - useState使用
  ```
  import { useState } from "react";
  const ButtonAdd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  }
  ```
  - 表示・非表示にはif文による条件分岐を利用
  ```
    if (true) {
      return (
        /* 3の内容 */
      );
    } else {
      return null; /* 何も表示しない */
    }
  ```
  - true部分をisModalOpenに置き換え
  ```
    /* モーダルタスク呼出部分 */
    <TaskModal isOpen={isModalOpen} />
    /* props受け取り，使用 */
    const TaskModal = ({ isOpen }) => { // { isOpen }はpropsでもOK。使用の際はprops.isOpenとする
     if (isOpen) {
       ・・・
      }}
  ```
5. クリックイベント追加
  - AddボタンをクリックしてisModalOpenの値をfalseからtrueに変更できるようにする
  ```
    <button onClick={() => setIsModalOpen(true)}>Add</button>
  ```
  - クローズ時。モーダルウィンドウ内の×ボタンを押すとisModalOpenの値がtrueからfalseに変更
  ```
    /* モーダルタスク呼出部分 */
    <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    /* props受け取り，使用 */
    const TaskModal = ({ isOpen, onClose  }) => { 
      return (
        <button onClick={onClose}>×</button>
      );
  ```
※Typescriptでは型の明記が必要
  - 例：複数プロパティがある場合、interfaceを使うと良い
  ```
    interface ModalProps {
      isOpen: boolean;
      onClose: () => void; // モーダルを閉じるための関数
    }
    /* 使い方1 */
    const TaskModal: React.FC<ModalProps> = (props) => {} // React.FC：ModalPropsを指定することで、TypeScriptがコンポーネントのプロパティに型チェックを行う。
                                                          // 間違った方で渡した場合、エラーを出してくれるため、バグを未然に防ぎやすい
    /* 使い方2 */
    const TaskModal = (props :ModalProps) => {}
  ```
6. stopPropagationの設定
  - コンテンツ要素(className='modal-content')でClickイベントが親コンポーネントに伝搬しないための設定
  ```
    <div className='modal-content' onClick={(e) => e.stoppropagation()}>
  ```
