var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

gulp.task('sass', function() { 
	gulp.src("./scss/style.scss")   //откуда брать файлы
	.pipe(sass().on('error', sass.logError))//поток(.не фаталит а пишет в лог)
	.pipe(gulp.dest('./css/'))	//куда складывать
	.pipe(reload({stream: true}));
	});


gulp.task('sass:watch', ['sass', 'browser-sync'] , function() {
	gulp.watch("./scss/**/*.scss", ['sass']);//("какие файлы смотреть", "какой таск запускать")

})

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./" 
		}
	});
});