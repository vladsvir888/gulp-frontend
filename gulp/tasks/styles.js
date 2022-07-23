import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sortMediaQueries from 'postcss-sort-media-queries';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import {
  config, src, dest, watch,
} from '../config';

const sass = gulpSass(dartSass);

const plugins = [
  autoprefixer(),
  cssnano(),
];

export const stylesBuild = () => (
  src(config.app.styles, { sourcemaps: config.isDev })
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['./node_modules'],
    }))
    .pipe(postcss([sortMediaQueries()]))
    .pipe(gulpif(config.isProd, postcss(plugins)))
    .pipe(dest(config.build.styles, { sourcemaps: config.isDev }))
);

export const stylesWatch = () => watch(config.watch.styles, stylesBuild);
