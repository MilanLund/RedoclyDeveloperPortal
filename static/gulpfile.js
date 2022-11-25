const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
});
const cleanCSS = require('gulp-clean-css');

const cssTasks = [{
  name: 'css-app',
  config: {
    src: [
      'assets/css/src/general/fonts.less',
      'assets/css/src/general/kentico-icons.less',
      'assets/css/src/general/utilities.less',
      'assets/css/src/components/api-info.less',
      'assets/css/src/components/table.less',
      'assets/css/src/components/callout.less',
      'assets/css/src/components/endpoint.less',
      'assets/css/src/components/redocly-overrides.less',
    ],
    fileName: 'app.less'
  }
}];

const processCss = (config) => {
  return gulp.src(config.src)
  .pipe(concat(config.fileName))
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('assets/css'));
};

cssTasks.forEach((item) => {
  gulp.task(item.name, () => processCss(item.config));
});

gulp.task('build-css', gulp.parallel(['css-app']));

gulp.task('watch', (done) => {
  gulp.watch('assets/css/src/**/*.less', gulp.series(['build-css']));
  done();
});

gulp.task('default', gulp.series([...cssTasks.map((item) => item.name), 'watch']));
