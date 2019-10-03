---
title: インストール
layout: docs
date: 2019-09-24 17:54:23
---

簡単な環境構築の方法です。

## モジュールの導入

`npm` コマンドを使ってtatamiをインストールします。

<pre class="language-bash"><code>
npm i -D @takamoso/tatami
</code></pre>

直接<a href="//github.com/takamoso/tatami/archive/master.zip">リポジトリからダウンロード</a>することもできます。

## バンドラーの設定

gulpやwebpackなどのバンドラーを使います。

### gulp 4

gulpの設定です。
  
  <pre class="language-js" data-title="gulpfile.js"><code>
const gulp = require('gulp')
const sass = require('gulp-sass')
const magic = require('node-sass-magic-importer')

gulp.task('css', () => {
  return gulp.src('path/to/style.scss')
    .pipe(sass({
      importer: [
        magic()
      ],
      functions: require('@takamoso/tatami/src/tatami'),
    }))
    .pipe(gulp.dest('path/to/output'))
})
</code></pre>

<pre class="language-scss" data-title="path/to/style.scss"><code>
@import '~@takamoso/tatami';

// Your code here!
</code></pre>

<pre class="language-bash"><code>
npx gulp css
</code></pre>

`npx` コマンドで `css` タスクを実行すればSassがコンパイルされます。