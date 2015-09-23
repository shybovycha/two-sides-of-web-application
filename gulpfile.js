var gulp = require('gulp'),
    sass = require('gulp-scss'),
    babel = require('gulp-babel'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    server = require('gulp-server-livereload');

gulp.task('build', function () {
    gulp.src('src/views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public/'));

    gulp.src('src/javascripts/**/*.js')
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/javascripts'));

    gulp.src('src/stylesheets/**/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('serve', function () {
    gulp.run('build');

    gulp.watch('src/**/*', [ 'build' ])

    gulp.src(['public/', 'bower_components/'])
        .pipe(server({
            port: 3000,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});