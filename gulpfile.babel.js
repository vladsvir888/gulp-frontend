import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { twigBuild, twigWatch } from './gulp/tasks/twig';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { resourcesBuild, resourcesWatch } from './gulp/tasks/resources';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';
import {
  config, parallel, series,
} from './gulp/config';

config.setEnv();

export const cleaning = clean;

export const build = series(
  clean,
  parallel(
    scriptsBuild,
    twigBuild,
    stylesBuild,
    imagesBuild,
    resourcesBuild,
    spritesBuild,
  ),
);

export const watch = series(
  build,
  server,
  parallel(
    scriptsWatch,
    twigWatch,
    stylesWatch,
    imagesWatch,
    resourcesWatch,
    spritesWatch,
  ),
);
