## Webpack sample

Webpack4を動作させるサンプル

## HOW TO RUN

以下を実行

### ホットリローディング

```bash
$ yarn run webpack-dev-server -- --inline --hot
```

`http://localhost:8080` にアクセス

### ビルド

```bash
$ yarn run webpack
```

index.htmlを開く

## 導入時メモ

yarnを入れておく

```bash
$ brew install yarn
```

以下のコマンドを実行して初期設定をおこなう

```bash
$ yarn init -y
$ yarn add webpack webpack-cli webpack-dev-server --dev
```

.gitignoreを追加。

```bash
$ echo node_modules > .gitignore
$ echo dist >> .gitignore
```

webpack.config.js の準備

```bash
$ touch webpack.config.js # write code...
```

jsファイルの準備。

```bash
$ mkdir src
$ touch src/index.js # write code...
$ touch src/sub.js # write code...
```

## 参考

* 最新版で学ぶwebpack 4入門 - JavaScriptのモジュールバンドラ - ICS MEDIA https://ics.media/entry/12140/

* webpack 4 入門 - Qiita https://qiita.com/soarflat/items/28bf799f7e0335b68186

## AUTHOR

[okutani](https://okutani.net/)
