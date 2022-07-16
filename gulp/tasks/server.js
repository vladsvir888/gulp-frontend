import browserSync from 'browser-sync';
import { config } from '../config';

const server = (cb) => {
  browserSync.create().init({
    server: {
      baseDir: config.build.root,
    },
    files: [
      `${config.build.templates}/*.html`,
      `${config.build.styles}/*.css`,
      `${config.build.scripts}/*.js`,
      {
        match: `${config.build.assets}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });

  cb();
};

export default server;
