import gulp from 'gulp'
import sass from 'gulp-sass'
import magic from 'node-sass-magic-importer'

export const test = () => {
  return gulp.src('test/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('test'))
}

export const watch = () => {
  gulp.watch('**/*.scss', gulp.series(test))
}