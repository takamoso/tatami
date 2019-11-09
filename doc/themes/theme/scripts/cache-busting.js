const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const hash = string => crypto.createHash('sha1').update(String(string), 'binary').digest('hex').slice(0, 7)
const css = hash(fs.statSync(path.join(__dirname, '../../../public/style.css')).mtime)
const js = hash(fs.statSync(path.join(__dirname, '../../../public/script.js')).mtime)

hexo.locals.set('ver', () => ({
  css,
  js,
}))