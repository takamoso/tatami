/**
 * HTMLの圧縮
 */

const path = require('path')
const htmlMinifier = require('html-minifier')

hexo.extend.filter.register('after_render:html', (str, data) => {
  if (path.extname(data.path) === '.ejs') {
    return htmlMinifier.minify(str, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    })
  }
})