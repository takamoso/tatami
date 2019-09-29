/**
 * HTMLの圧縮
 */

const htmlMinifier = require('html-minifier')

hexo.extend.filter.register('after_render:html', str => {
  return htmlMinifier.minify(str, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
  })
})