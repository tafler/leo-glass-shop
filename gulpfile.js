var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() { 
	gulp.src("./scss/style.scss")   //откуда брать файлы
	.pipe(sass().on('error', sass.logError))//поток(.не фаталит а пишет в лог)
	.pipe(gulp.dest('./css/'));	//куда складывать
	})


gulp.task('sass:watch', function() {
	gulp.watch("./scss/**/*.scss", ['sass']); //("какие файлы смотреть", "какой таск запускать")
	})