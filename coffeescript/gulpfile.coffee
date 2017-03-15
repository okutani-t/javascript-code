gulp = require('gulp')
coffee = require('gulp-coffee')
plumber = require('gulp-plumber')

gulp.task 'watch', ->
  gulp.watch('coffee/*.coffee', ['coffee'])

gulp.task 'coffee', ->
  gulp.src('coffee/*.coffee')
      .pipe(coffee({bare:true}))
      .pipe gulp.dest('js')
      .pipe(plumber())

gulp.task 'default', ->
  gulp.run 'watch'
