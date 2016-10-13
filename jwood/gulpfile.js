var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
postcss([require('postcss-flexbugs-fixes')]);
var browserSync = require('browser-sync');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']['> 2%']}),

    ];
    return gulp.src('blocks/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('browser-sync', function () {
	var files = [
		'*.html',
		'blocks/**/*.css',
		'blocks/**/*.png'
		];
	browserSync.init(files, {
		server: {
			baseDir: './'
			}
		});
	});
gulp.task('default', ['css']);

gulp.watch('blocks**/*.css', function(){
  console.log('seen');
});
