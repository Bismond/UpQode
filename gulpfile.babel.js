'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import prefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rigger from 'gulp-rigger';
import imagemin from 'gulp-imagemin';
import cssmin from 'gulp-minify-css';
import pngquant from 'imagemin-pngquant';
import rimraf from 'rimraf';
import browserSync from 'browser-sync';
import terser from 'gulp-terser';

const reload = browserSync.reload;

const path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/script.js',
        style: 'src/style/style.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/script.js',
        style: 'src/style/style.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    open: false,
    notify: false,
    logPrefix: 'Bismond'
};

gulp.task('webserver', () => {
    browserSync(config);
});

gulp.task('clean', (cb) => {
    rimraf(path.clean, cb);
});

gulp.task('html:build', () => {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});

gulp.task('js:build', () => {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }));
});

gulp.task('style:build', () => {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});

gulp.task('image:build', () => {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', () => {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', () => {
    watch([path.watch.html], () => {
        gulp.start('html:build');
    });
    watch([path.watch.style], () => {           //gulp default запустити в консолі
        gulp.start('style:build');
    });
    watch([path.watch.js], () => {
        gulp.start('js:build');
    });
    watch([path.watch.img], () => {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], () => {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);

