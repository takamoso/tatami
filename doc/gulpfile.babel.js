import path from 'path'
import rimraf from 'rimraf'
import gulp from 'gulp'
import ifelse from 'gulp-if'
import touch from 'gulp-touch-cmd'
import plumber from 'gulp-plumber'
import Hexo from 'hexo'
import sass from 'gulp-sass'
import sassvar from 'gulp-sass-variables'
import magic from 'node-sass-magic-importer'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from './webpack.config.babel'
import browserSync from 'browser-sync'

const hexo = new Hexo(__dirname)
const server = browserSync.create()
const prod = process.env.NODE_ENV === 'production'

/**
 * Hexoの初期化
 */

export const init = async () => await hexo.init()

/**
 * Hexoのgenerateコマンド
 */

export const generate = async () => {
  await hexo.call('generate')
  await hexo.exit()
}

/**
 * Sassのコンパイル
 */

export const style = () => {
  return gulp.src('./themes/theme/source/_css/style.scss')
    .pipe(plumber())
    .pipe(sassvar({
      $prod: prod,
    }))
    .pipe(sass({
      importer: [
        magic(),
      ],
      functions: require('../src/tatami'),
    }))
    .pipe(ifelse(prod, postcss([
      autoprefixer({
        grid: 'autoplace',
      }),
      cssnano(),
    ])))
    .pipe(gulp.dest('./public'))
    .pipe(touch())
}

/**
 * JavaScriptのバンドル
 */

export const script = () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(plumber())
    .pipe(gulp.dest('./public'))
}

/**
 * 出力フォルダ削除
 */

//export const clean = done => rimraf(path.join(__dirname, 'public'), {}, done)
export const clean = async () => await hexo.call('clean')

/** 
 * BrowserSyncのリロード
 */

export const reload = done => {
  server.reload()
  done()
}

/**
 * ファイル監視
 */

export const watch = async () => {
  await init()

  server.init({
    server: {
      baseDir: path.join(__dirname, 'public'),
    },
    https: true,
    browser: 'google chrome canary',
  })

  gulp.watch(['./source/**/*', './themes/theme/layout/**/*'], gulp.series(generate, gulp.parallel(style, script), reload))
  gulp.watch('./themes/theme/source/_css/**/*.scss', gulp.series(style, reload))
  gulp.watch('./themes/theme/source/_js/**/*.js', gulp.series(script, reload))
}

/**
 * ビルド
 */

export const build = gulp.series(init, clean, generate, gulp.parallel(style, script))

/**
 * デフォルト
 */

export default () => gulp.series(watch)