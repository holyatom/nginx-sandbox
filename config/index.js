import _ from 'lodash';
import fs from 'fs';
import deepExtend from 'underscore-deep-extend';


_.mixin({ deepExtend: deepExtend(_) });

var
  config, defaults, readConfigs,
  nodeEnv = process.env.NODE_ENV || 'development';

readConfigs = function (path = '') {
  var
    envConfPath = `${__dirname}/${path}${nodeEnv}.js`,
    localConfPath = `${__dirname}/${path}local.js`,
    confs = [require(`${__dirname}/${path}default.js`)];

  if (fs.existsSync(envConfPath)) {
    confs.push(require(envConfPath));
  }

  if (fs.existsSync(localConfPath)) {
    confs.push(require(localConfPath));
  }

  return confs;
};

defaults = {
  env: nodeEnv,
  debug: nodeEnv !== 'staging' && nodeEnv !== 'production',
};

config = _.deepExtend(defaults, ...readConfigs());

export default config;
