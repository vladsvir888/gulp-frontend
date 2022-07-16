import svgSprite from 'gulp-svg-sprite';
import {
  config, src, dest, watch, parallel,
} from '../config';

const spriteMono = () => (
  src(config.app.iconsMono)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprites/sprite-mono.svg',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
                  },
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(dest(config.build.assets))
);

const spriteMulti = () => (
  src(config.app.iconsMulti)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprites/sprite-multi.svg',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name'],
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(dest(config.build.assets))
);

export const spritesBuild = parallel(spriteMono, spriteMulti);

export const spritesWatch = () => {
  watch(config.watch.iconsMono, spriteMono);
  watch(config.watch.iconsMulti, spriteMulti);
};
