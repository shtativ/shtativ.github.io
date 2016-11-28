var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// postcss([require('postcss-flexbugs-fixes')]);
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');

//minify-css
gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']['> 2%']}),
    ];
    return gulp.src('css/**/*.css')
        // .pipe(postcss(processors))
        .pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(csso())
        .pipe(gulp.dest('dist/css/'));
});
//minify-html
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});
//minify-js
gulp.task('js', function () {
  return gulp.src('js/**/*.js')
       .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));

});
//compress images
gulp.task('img', function () {
    gulp.src('images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
});
// compress svg
gulp.task('svg', function () {
    return gulp.src('images/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/images/'));
})

//livereload task
gulp.task('browser-sync', function () {
	var files = [
		'*.html',
		'css/**/*.css',
		'js/**/*.js',
		'images/**/*.png',
		'images/**/*.jpg'
		'images/**/*.svg'
		];
	browserSync.init(files, {
		server: {
			baseDir: './'
			}
		});
	});
gulp.task('default', ['css', 'html', 'js', 'img', 'svg']);

gulp.watch('css/**/*.css', function(){
  console.log('seen');
});
