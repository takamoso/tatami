import gulp from 'gulp'
import sass from 'gulp-sass'

export const test = () => {
  return gulp.src('./test/style.scss')
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(gulp.dest('./test'))
}

export const watch = () => {
  gulp.watch(['./scss/**/*.scss', './test/**/*.scss'], test)
}