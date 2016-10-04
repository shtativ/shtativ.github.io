var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
postcss([require('postcss-flexbugs-fixes')]);
var browserSync = require('browser-sync');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']['> 2%']}),
        
    ];
    return gulp.src('css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('css'));
});
gulp.task('browser-sync', function () {
	var files = [
		'*.html',
		'css/**/*.css',
		'img/**/*.png'
		];
	browserSync.init(files, {
		server: {
			baseDir: '.'
			}
		});
	});
gulp.task('default', ['css']);

