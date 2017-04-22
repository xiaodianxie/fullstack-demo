const gulp 	= require("gulp");
const babel = require("gulp-babel");
const plumber = require('gulp-plumber');

const src 	= ['src/**/*.es'];

gulp.task('default',['babel'],() => {
	gulp.watch(src, ['babel']);
});

gulp.task('babel', () => {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(babel({
			presets:['es2015','stage-0']
		}))
		.pipe(gulp.dest('./build'))
})