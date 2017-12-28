var gulp = require("gulp");
var gutil = require('gulp-util');
var typescript = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var tsify = require('tsify');
 

const aiProject = typescript.createProject("./tsconfig.ai.json", {declaration: true});
const workerProject = require("./tsconfig.worker.json");

gulp.task('lift', ["compile"], function()
{
    gulp.watch("source/**/*.ts", ["compile"]);
});


gulp.task('compile', ["ai-compile", "worker-compile"]);

// Compile full bundle Chess + Chessboard
gulp.task("ai-compile", function ()
{
	var tsResults = gulp.src("source/ChessAI/**/*.ts")
	.pipe(sourcemaps.init())
	.pipe(aiProject());

	 return merge([
        tsResults.dts.pipe(gulp.dest('./build/ChessAI/')),
        tsResults.js.pipe(sourcemaps.write('./')).pipe(gulp.dest('./build/ChessAI/'))
	 ]);

});

// Compile full bundle Chess + Chessboard
gulp.task("worker-compile", function ()
{
	var bundler = browserify({
		debug: true,
	})
		.add('source/AIWorker/worker.ts')
		.plugin(tsify, workerProject.compilerOptions);
	
	return bundler.bundle()
		.on('error', function (error) { console.error(error.toString()); })
		.pipe(source('worker.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("./build/worker/"));

});

	


		
