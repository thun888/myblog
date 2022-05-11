'use strict';

hexo.extend.helper.register('scrollreveal', function (args) {
  var cfg = hexo.theme.config;

  if (cfg.plugins.scrollreveal && cfg.plugins.scrollreveal.enable) {
    return ' reveal';
  }

  return '';
});