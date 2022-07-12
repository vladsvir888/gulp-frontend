import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import {
  config, src, dest, watch,
} from '../config';

const sass = gulpSass(dartSass);

export const stylesBuild = () => (
  src(`${config.app.styles}/main.scss`, { sourcemaps: config.isDev })
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['./node_modules'],
    }))
    .pipe(gcmq())
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({
      level: {
        1: {
          all: true,
          normalizeUrls: false,
        },
        2: {
          restructureRules: true,
        },
      },
    })))
    .pipe(gulpif(config.isProd, rename({
      suffix: '.min',
    })))
    .pipe(dest(config.build.styles, { sourcemaps: config.isDev }))
);

export const stylesWatch = () => watch(`${config.app.root}/{styles,blocks}/**/*.scss`, stylesBuild);
