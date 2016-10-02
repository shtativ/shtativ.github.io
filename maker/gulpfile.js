var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
postcss([require('postcss-flexbugs-fixes')]);
gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']['> 2%']}),
        
    ];
    return gulp.src('css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['css']);

