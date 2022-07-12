import gulp from 'gulp';

export const {
  src, dest, series, parallel, watch,
} = gulp;

const appFolder = 'app';
const buildFolder = 'build';

export const config = {
  app: {
    root: appFolder,
    templates: appFolder,
    styles: `${appFolder}/styles`,
    scripts: `${appFolder}/scripts`,
    resources: `${appFolder}/resources`,
    images: `${appFolder}/images`,
    iconsMono: `${appFolder}/icons/mono`,
    iconsMulti: `${appFolder}/icons/multi`,
  },

  build: {
    root: buildFolder,
    templates: buildFolder,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    images: `${appFolder}/images`,
    assets: `${buildFolder}/assets`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--production');
    this.isDev = !this.isProd;
  },
};
