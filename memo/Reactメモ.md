# Reactメモ
# useContextの使い方(.tsx)
- useContext：コンポーネント間でのpropsのバケツリレーを避ける仕組み。グローバルに使用できる。

## 定義側
### 大まかな手順
1. React.createContextでコンテキストを作成
2. 値を供給するProviderを設定

#### 1. React.createContextでコンテキストを作成
```
// Contextの型定義
interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

// Contextを初期値を設定して作成(更新関数はから関数で仮置き)
export const MyContext = React.createContext<MyContextType>({
  value: "";
  setValue: () => {};
});
```

#### 2. 値を供給するProviderを設定
0. typescriptの場合、型を定義する
1. 普通の値を渡す場合
  状態管理が不要な固定値を渡す
2. useStateの値と更新関数を渡す場合
  状態と更新関数をセットで渡す。これにより、コンテキスト内の値を動的に変更できる
```
export const MyProvider = ({ children }: {children: React.ReactNode }) => {
  const [value, setValue] = React.useState<string>("");
  
  return (
    <MyContext.Provider value={{value, setValur}}>
      {children}
    </MyContext.provider>
  );
};
```
  - childrenにMyProviderでラップしたコンポーネントツリーが入る
  - value={{value, setValue}}で値と更新関数をコンポーネント全体に供給している
## 呼出側
### 大まかな手順
1. 定義側で定義されたcontextをインポート
2. useContextを使用して、値や更新関数を取得し、利用

#### i) 普通の値を取得する場合
- 前提：固定値を供給するProviderがある場合
```
import { MyContext } from "./MyContext";

const ChildComponent = () => {
  const { value } = useContext(MyContext); // Contextから値を取得
  
  return <div> Context value: {value} </div>;
};
```

#### ii) useStateの値と更新関数を取得する場合
- 値を取得して表示し、更新関数を呼び出して変更する場合
```
import { MyContext } from "./MyContext";

const ChildComponent = () => {
  const { value, setValue } = useContext(Mycontext); 
  
  const handClick = () => {
    setValue("New world"); //更新関数を呼び出して値を変更
  };
  return (
    <div>
      <p>Context value: {value}</p>
      <button onClick={handClick}> Update value </button>
    <div>
  );
};
```
