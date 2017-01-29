var gulp = require('gulp');
var postcss  = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var flexbugsfixes = require('postcss-flexbugs-fixes');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

//minify-css
gulp.task('css', function () {
    var processors = [
          flexbugsfixes(),
          autoprefixer({browsers: ['last 3 version']['> 2%']}),
          cssnano({discardUnused: {fontFace: false}}),
      ];
      return gulp.src('src/css/**/*.css')
          .pipe(postcss(processors))
          .pipe(gulp.dest('css'));
});
//minify-html
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(''));
});
//minify-js
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});
//compress images
gulp.task('img', function() {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
});
// compress svg
gulp.task('svg', function() {
    return gulp.src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('img/'));
});
//livereload task
gulp.task('browser-sync', function() {
    var files = [
        'src/*.html',
	      'src/*.htm',
        'src/css/**/*.css',
        'src/js/**/*.js',
        'src/img/**/*.png',
        'src/img/**/*.jpg',
        'src/img/**/*.svg'
    ];
    browserSync.init(files, {
        server: {
            baseDir: 'src/'
        }
    });
});

//gulp
gulp.task('default', ['css', 'html', 'js', 'img', 'svg']);
