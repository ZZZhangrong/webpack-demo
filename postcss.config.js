module.exports = {
    // "postcss": {
    //   "parser": "sugarss",
    //   "map": false,
    //   "plugins": [require('autoprefixer')]
    // }

    "plugins": [require('autoprefixer')] // ，postcss 是一个工具本身并不会对css 操作，它通过插件实现功能。 这就是一个自动补全前缀的插件
  }