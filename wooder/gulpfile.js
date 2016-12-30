var gulp = require('gulp');
var postcss  = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var flexbugsfixes = require('postcss-flexbugs-fixes');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var pug = require('gulp-pug');
var sass = require('gulp-sass');


//minify-css
gulp.task('css', function () {
    var processors = [
          flexbugsfixes(),
          autoprefixer({browsers: ['last 3 version']['> 2%']}),
          cssnano({discardUnused: {fontFace: false}}),
      ];
      return gulp.src('src/css/**/*.css')
          .pipe(postcss(processors))
          .pipe(gulp.dest('dist/css'));
});

//sass-scss
// gulp.task('sass', function () {
//   return gulp.src('src/css/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('scss'));
// });
// gulp.task('sass:watch', function () {
//   gulp.watch('scss/**/*.scss', ['sass']);
// });

//pug-->html
gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty: true //минимизирует код(false)
    }))
    .pipe(gulp.dest('src/'));
});

//minify-html
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});
//minify-js
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));

});
//compress images
gulp.task('img', function() {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
});
// compress svg
gulp.task('svg', function() {
    return gulp.src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/img/'));
})

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
            // baseDir: './'
        }
    });
});
gulp.task('default', ['pug', 'css', 'html', 'js', 'img', 'svg']);

gulp.watch('src/css/**/*.css', function() {
    console.log('seen');
});
