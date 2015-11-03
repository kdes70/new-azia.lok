var gulp = require('gulp'),
    wiredep = require('wiredep').stream;


gulp.task('bower', function () {
    gulp.src('./index.html')
        .pipe(wiredep({
           directory: "bower_components"
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    gulp.watch('./bower.json', ['bower']);
});