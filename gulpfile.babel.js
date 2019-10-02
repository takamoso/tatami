import gulp from 'gulp'
import sass from 'gulp-sass'

export const test = async () => {
  return gulp.src('./test/style.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      functions: await import('./src/tatami'),
    }))
    .pipe(gulp.dest('./test'))
}

export const watch = () => {
  gulp.watch(['./src/**/*.scss', './test/**/*.scss'], test)
}