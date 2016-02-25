var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/main.js')
      .transform('reactify')
      .bundle()
      .on('error', function(err){
        // print the error (can replace with gulp-util)
        console.log(err.message);
        // end this stream
        this.emit('end');
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('public'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('public'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('public/assets'));
});

var input = './src/css/*.scss';
var output = './public/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

gulp.task('default',['browserify', 'sass', 'copy'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'sass', 'copy'])
});
