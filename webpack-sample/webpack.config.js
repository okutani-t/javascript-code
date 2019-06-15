module.exports = {
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
  output: {
    // 出力ファイル名
    filename: 'main.js',
    // 出力先
    path: `${__dirname}/dist`
  }
};
