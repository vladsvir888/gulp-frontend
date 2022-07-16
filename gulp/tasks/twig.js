import twig from 'gulp-twig';
import htmlbeautify from 'gulp-html-beautify';
import {
  config, src, dest, watch,
} from '../config';

export const twigBuild = () => (
  src(config.app.templates)
    .pipe(twig({
      base: 'app',
    }))
    .pipe(htmlbeautify({
      indent_with_tabs: false,
      indent_size: 2,
      max_preserve_newlines: 0,
    }))
    .pipe(dest(config.build.templates))
);

export const twigWatch = () => watch(config.watch.templates, twigBuild);
