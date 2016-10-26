var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
postcss([require('postcss-flexbugs-fixes')]);
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']['> 2%']}),

    ];
    return gulp.src('css/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css/'));
});

//compress images task
gulp.task('compress', function () {
    gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images/'))
});

//watch task
gulp.task('watch', function() {
  gulp.watch('images/**/*', ['compress']);
});

//livereload task
gulp.task('browser-sync', function () {
	var files = [
		'*.html',
		'css/**/*.css',
		'js/**/*.js',
		'images/**/*.png',
		'images/**/*.jpg'
		];
	browserSync.init(files, {
		server: {
			baseDir: './'
			}
		});
	});
gulp.task('default', ['css', 'watch']);

gulp.watch('css/**/*.css', function(){
  console.log('seen');
});
