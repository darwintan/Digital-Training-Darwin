var gulp = require('gulp');
var inline = require('gulp-inline')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-clean-css')
  , autoprefixer = require('gulp-autoprefixer');
var zip = require('gulp-zip');


gulp.task('image', function() {
return gulp.src('dev/*.{jpg,png,svg}')
    .pipe(gulp.dest('dist/royalcanin'))

  })

gulp.task('start', function() {
  return gulp.src('dev/index.html')
    .pipe(inline({
      base: 'dev/',
      js: uglify,
      css: [minifyCss, autoprefixer({ browsers:['last 2 versions'] })],
      disabledTypes: ['svg', 'img',], // Only inline css files
      ignore: ['']
    }))
    .pipe(gulp.dest('dist/royalcanin'));
      })

  gulp.task('zip', function() {
  return gulp.src('dist/royalcanin/**')
    .pipe(zip('royalcanin.zip'))
    .pipe(gulp.dest('dist'))

    })

gulp.task("default", gulp.series('image', 'start', 'zip'));
