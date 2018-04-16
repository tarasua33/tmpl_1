var
    gulp = require("gulp"),
    del = require("del"),
    sync = require("browser-sync").create(),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });

var IS_DEV = true;                       //show status develop !!!NEED change to false!!!

/**task create html pages**/
gulp.task("html", function () {
   return gulp.src("src/views/*.html")
       .pipe(plugins.htmlExtend())              // extend html pages
       .pipe(gulp.dest("dist"))
});

/**task convert less to css**/
gulp.task("styles:app", function () {
    return gulp.src("src/styles/app.less")
        .pipe(plugins.if(IS_DEV, plugins.sourcemaps.init()))
        .pipe(plugins.plumber())                // catch errors
        .pipe(plugins.less())                   //converting to css
        .pipe(plugins.rename("app.min.css"))    //rename file
        .pipe(plugins.if(IS_DEV, plugins.sourcemaps.write(".")))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream())                    //implementation changes
});

/*task for CONCAT main JS*/
gulp.task("js:app", function () {
    return gulp.src("src/scripts/**/*.js")
        .pipe(plugins.concat("app.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});

/**tasks concat vendor css and fonts(bootstrap)**/
gulp.task("styles:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ])
        .pipe(plugins.concat("vendor.min.css"))  // concat and rename bootstrap css file
        .pipe(gulp.dest("dist/css"))
});
/*bootstrap fonts*/
gulp.task("fonts:vendor", function () {
    return gulp.src(["node_modules/bootstrap/dist/fonts/*"])
        .pipe(gulp.dest("dist/fonts"))
});
/*JQUERY JS*/
gulp.task("js:vendor", function () {
    return gulp.src(["node_modules/jquery/dist/jquery.min.js"])
        .pipe(plugins.concat("vendor.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});

/**Filter ISOTOPE**/
gulp.task("js:filter", function () {
    return gulp.src(["src/scriptIsotope/isotope.js"])
        .pipe(plugins.concat("isotope.min.js"))
        .pipe(gulp.dest("dist/js"))
});

/*copy images File*/
gulp.task("img", function () {
    return gulp.src("src/img/*")
        .pipe(gulp.dest("dist/img"))
});

//**task for clean dist**//
gulp.task("del", function (callback) {
    del.sync("dist");
    callback();
});

//**task for run all tasks**//
gulp.task("build", ["del"],  function () {
    gulp.start([
        "html",
        "styles:app",
        "styles:vendor",
        "fonts:vendor",
        "img",
        "js:vendor",
        "js:filter",
        "js:app"
    ]);
});

//**task watch - for automatic implementation**//
gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/styles/**/*.less", ["styles:app"]);

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);
});

/*task default*/
gulp.task("default", ["watch"]);