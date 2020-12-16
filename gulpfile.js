var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

/* changed function to async function since new gulp causes error*/

gulp.task('styles', async function() {
    gulp.src('./json_exercise_css.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build_alt'));
});

gulp.task('watch', function() {
    gulp.watch('./json_exercise_css.css', ['styles']);
});