# HeaderBar解説

## Serchコンポーネント
styled-componentsを使用してMaterial-UIのテーマに基づいたスタイルを適用。
### styled-componentsとは
JavaScriptの中にスタイル(CSS)を記述する方法。(CSS in JS)
- インポート
  ```
   // muiを使用する場合
   import styled from '@mui/material/styles'
   // muiを使用しない場合
   import styled from 'styled-components'
  ```
- 使い方
  ```
    const Serch = styled('div')(({ theme }) => ({}));
  ```
  - styled：MUIのパッケージから提供される関数で、HTMLタグ(この場合div)やReactコンポーネントに対してカスタムスタイルを適用できる。
  - theme：MUIのテーマオブジェクト。theme.paletteやtheme.spacingなどを利用して、テーマに基づいたスタイルを動的に生成する
    参考：https://zenn.dev/longbridge/articles/c100d0311ed1be
  
  #### ホバー時の背景色変更
  ```
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    }
  ```
  - alpha：@mui/materialが提供するユーティリティ関数で、色に透明度(アルファ値)を付加するために使用される。(アルファ値0~1の範囲)
  - ホバー時の動作説明：白色を基に透明度25%(アルファ値0.25)を適用した色を生成
    - theme.palette.common.white
      Material-UIのテーマ(theme)から取得した白色。この定義を使うことでプロジェクトで一貫した白色を使用できる。
  
  #### 画面サイズがsm(小さいスクリーンサイズ)以上の場合に適用されるスタイルを定義
  ```
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  ```
  - [theme.breakpoints.up('sm')]：レスポンシブデザインに関連するブレークポイント(画面サイズ)に基づくスタイルを適用するための機能
    - up('sm')：指定した画面サイズ以上のスクリーンサイズに対してスタイルを適用
    - sm：通常600px以上のスクリーンサイズに対応
  - theme.spacing(1)：テーマの設定に基づいたスペースを提供。通常8pxスペース。 
