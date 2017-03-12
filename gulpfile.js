/**
 * Created by hementsharma on 12/03/17.
 */
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");

gulp.task('default', function() {
    gulp.src('img/*').pipe(
        imageResize({
            width : 100,
            height : 100,
            crop : false,
            upscale : false
        })
    ).pipe(rename(function (path) { path.basename += "-thumbnail"; })).pipe(gulp.dest('img/'));
});