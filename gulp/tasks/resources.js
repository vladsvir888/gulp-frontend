import {
  config, src, dest, watch,
} from '../config';

export const resourcesBuild = () => (
  src(`${config.app.resources}`)
    .pipe(dest(config.build.assets))
);

export const resourcesWatch = () => watch(config.watch.resources, resourcesBuild);
