var gulp = require('gulp'),
    //CSS
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    //more
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    path = require('path'),
    wiredep = require('wiredep').stream;

var siteName = "Smoll Azia";


gulp.task('dep_css', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("/bundle.min.css"))
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 9"))
        .pipe(minifyCss())
       // .pipe(rename("/bundle.min.css"))
        .pipe(gulp.dest('css/'))

        .pipe(notify({
            "title":"DONE!",
            "subtitle": siteName,
            "message":"Deploy CSS Success",
            "sound": "Frog", // case sensitive
            "icon": path.join(__dirname, "images/icon/Ok.png"), // case sensitive
            "onLast": true,
           // "wait": true
        }));

});

gulp.task('bower', function () {
    gulp.src('./index.html')
        .pipe(wiredep({
           directory: "vender"
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    gulp.watch('./bower.json', ['bower']);
});