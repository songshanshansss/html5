const gulp = require("gulp"),  
	sass = require("gulp-sass"),  
	uglify = require("gulp-uglify"),  //压缩JS
	babel = require("gulp-babel"),  //es6到es5
	htmlmin = require("gulp-htmlmin"), //压缩HTML
	connect = require("gulp-connect");  //实现自动刷新WEB

// 启动 webserver
gulp.task("conn", function(){
	connect.server({
		root : "dist",
		livereload: true
	});
});

// 编译 sass 
gulp.task("sass", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle:"compressed"}))  //压缩及压缩风格
		.pipe(gulp.dest("dist/css")) //放到哪里去
		.pipe(connect.reload());
});

// 压缩 html
gulp.task('html', function() {
	gulp.src('src/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

// 压缩 JS
gulp.task("js", function(){
	gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

// 复制lib
gulp.task("copy-lib", function(){
	gulp.src("src/lib/**/*.*")
		.pipe(gulp.dest("dist/lib"));
});

// 复制imgs
gulp.task("copy-imgs", function(){
	gulp.src("src/imgs/**/*.*")
		.pipe(gulp.dest("dist/imgs"));
});

// 复制mock
gulp.task("copy-mock", function(){
	gulp.src("src/mock/**/*.*")
		.pipe(gulp.dest("dist/mock"));
});

gulp.task("copy", ["copy-lib", "copy-imgs", "copy-mock"]);

// 监视任务
gulp.task("watch", function(){
	gulp.watch("src/sass/*.scss", ["sass"]);
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("src/js/*.js", ["js"])
});

// 定义默认任务
gulp.task("default", ["sass", "html", "js", "copy", "conn", "watch"]);

