# @hiroxto/eslint-config

ESLintのShareable Config

## 使い方

eslintと@hiroxto/eslint-configをインストール。

```shell
$ yarn add -D eslint @hiroxto/eslint-config
```

`.eslintrc.js`を以下のように設定。

```javascript
module.exports = {
  root: true,
  extends: [
    '@hiroxto',
  ],
  rules: {
    // プロジェクト固有のルールがあるならここに書く
  },
};
```

他の設定ファイルを読み込む場合は更に追加する。

```javascript
module.exports = {
  root: true,
  extends: [
    '@hiroxto',
    '@hiroxto/eslint-config/vue',
  ],
  rules: {
    // プロジェクト固有のルールがあるならここに書く
  },
};
```

## LICENSE

MIT
