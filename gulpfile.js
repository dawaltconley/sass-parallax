const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassCompile = () => gulp.src('eleventy/css/**/*.scss')
    .pipe(sass({ quietDeps: true }).on('error', sass.logError))
    .pipe(gulp.dest('eleventy/_site/css'));

const sassWatch = () => gulp.watch('eleventy/css/**/*.scss', sassCompile);

exports.build = sassCompile;

exports.serve = gulp.series(sassCompile, sassWatch);
