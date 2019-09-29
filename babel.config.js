module.exports = api => {
  api.cache(true)

  return {
    sourceType: 'unambiguous',
    presets: [
      ['@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      }],
    ],
    overrides: [
      {
        test: /\.babel\.js$/,
        presets: [
          ['@babel/preset-env', {
            targets: {
              node: 'current',
            },
          }],
        ],
      },
    ],
  }
}