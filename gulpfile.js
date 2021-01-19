const { src, dest, watch, parallel, series } = require("gulp");

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");
const svg = require('gulp-svg-sprite');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminWebp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');
const sync = require("browser-sync").create();

function generateCSS(cb) {
  src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('public/stylesheets'))
    .pipe(sync.stream());
  cb();
}

function generateHTML(cb) {
  src("./views/index.ejs")
    .pipe(ejs({
      title: "Adam Retter",
    }))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(dest("public/views"));
  cb();
}

// SVG SPRITES

const SPRITE_PATH = './images/svgs/*.svg';
const SPRITE_DIST_PATH = 'public/images/svgs';

function generateSVG(cb) {
  src(SPRITE_PATH)
    .pipe(svg({
      shape: {
        dimension: { // Set maximum dimensions
          maxWidth: 100,
          maxHeight: 100
        },
        spacing: { // Add padding
          padding: 10
        },
        dest: "intermediate-svg"
      },
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest(SPRITE_DIST_PATH));
  cb();
}

//Images
const IMAGES_PATH = './images/png-jpg/*.{png,jpeg,jpg,gif}';
const IMAGES_DIST_PATH = 'public/images/webp';

function generateWEBP(cb) {
  return src(IMAGES_PATH)
    .pipe(imagemin(
      [
        imagemin.gifsicle(),
        imagemin.mozjpeg(),
        imagemin.optipng(),
        imageminPngquant(),
        imageminJpegRecompress(),
        imageminWebp({quality: 75})
      ]
    ))
    .pipe(extReplace('.webp'))
    .pipe(dest(IMAGES_DIST_PATH))
    .on('end', function() {
      cb();
    });
}

// Fonts
const SRC_FONTS_PATH = './webfontkit/**/*.{ttf,woff,woff2,otf,css,}';
const DIST_FONTS_PATH = 'public/webfontkit';

function generateFONTS() {
  return src(SRC_FONTS_PATH)
    .pipe(dest(DIST_FONTS_PATH));
  }

const SRC_ICONS_PATH = './icons/**/*.{png,xml,ico,json,}';
const DIST_ICONS_PATH = 'public/icons';

function generateICONS() {
  return src(SRC_ICONS_PATH)
    .pipe(dest(DIST_ICONS_PATH));
  }

function runLinter(cb) {
  return src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('end', function() {
      cb();
    });
}

function runTests(cb) {
  return src(['**/*.test.js'])
    .pipe(mocha())
    .on('error', function() {
      cb(new Error('Test failed'));
    })
    .on('end', function() {
      cb();
    });
}

function watchFiles(cb) {
  watch('views/**.ejs', generateHTML);
  watch('sass/**/**.scss', generateCSS);
  watch([ '**/*.js', '!node_modules/**'], parallel(runLinter, runTests));
}

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "./public"
    }
  });

  watch('views/**.ejs', generateHTML);
  watch('sass/**/**.scss', generateCSS);
  watch("./public/**.html").on('change', sync.reload);
}

exports.css = generateCSS;
exports.html = generateHTML;
exports.svg = generateSVG;
exports.webp = generateWEBP;
exports.fonts = generateFONTS;
exports.icons = generateICONS;
exports.lint = runLinter;
exports.test = runTests;
exports.watch = watchFiles;
exports.sync = browserSync;

exports.default = series(runLinter,parallel(generateCSS,generateHTML,generateSVG,generateWEBP,generateFONTS,generateICONS,browserSync),runTests);
