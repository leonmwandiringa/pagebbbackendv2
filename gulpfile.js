/**
 * @author Leon Mwandiringa
 * @uses compile and watch typescript files
 */
const gulp = require("gulp");
const typescript = require("gulp-typescript");
const JSON_FILES = ["tsconfig.json", "package.json"];
const ASSET_ASSIST = ["src/**.json", "src/**/**.json"];

//define instructions
const tsProject = typescript.createProject(JSON_FILES[0]);

gulp.task("compile", ()=>{

    const tsResult = tsProject.src().pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist'));

});

gulp.task("watch", ["compile"], ()=>{

    gulp.watch("src/**/**.ts", ["compile"]);

});

gulp.task("assets", ()=>{

    return gulp.src(ASSET_ASSIST).pipe(gulp.dest("dist"));

});

gulp.task("default", ["watch", "assets"]);