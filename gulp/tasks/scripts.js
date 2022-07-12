import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import yargs from 'yargs';
import {
  config, src, dest, watch,
} from '../config';

import webpackConfig from '../../webpack.config.babel';

const { argv } = yargs;
const production = !!argv.production;

webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'inline-source-map';

export const scriptsBuild = () => (
  src(`${config.app.scripts}/index.js`)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpif(production, rename({
      suffix: '.min',
    })))
    .pipe(dest(config.build.scripts))
);

export const scriptsWatch = () => watch(`${config.app.root}/{scripts,blocks}/**/*.js`, scriptsBuild);
