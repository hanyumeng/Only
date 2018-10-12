var gulp = require("gulp");

gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index1.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo"));
});

gulp.task("watch",function(){
	gulp.watch("index1.html",["copy-html"]);
});