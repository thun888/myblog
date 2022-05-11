/**
 * 部分代码借鉴自 NexT:
 * https://github.com/next-theme/hexo-theme-next/blob/master/scripts/events/lib/config.js
 */
'use strict';

module.exports = function (hexo) {
  var _hexo$theme$config = hexo.theme.config,
      cache = _hexo$theme$config.cache,
      language_switcher = _hexo$theme$config.language_switcher;

  var warning = function warning() {
    hexo.log.warn("Since ".concat(arguments.length <= 0 ? undefined : arguments[0], " is turned on, the ").concat(arguments.length <= 1 ? undefined : arguments[1], " is disabled to avoid potential hazards."));
  };

  if (cache && cache.enable && language_switcher) {
    warning('language_switcher', 'caching');
    cache.enable = false;
  }

  if (cache && cache.enable && hexo.config.relative_link) {
    warning('caching', '`relative_link` option in Hexo `_config.yml`');
    hexo.config.relative_link = false;
  }

  hexo.config.meta_generator = false; // merge data

  var data = hexo.locals.get('data');

  if (data.widgets) {
    for (var _i = 0, _Object$keys = Object.keys(data.widgets); _i < _Object$keys.length; _i++) {
      var id = _Object$keys[_i];
      hexo.theme.config.sidebar.widgets[id] = data.widgets[id];
    }
  } // default menu


  if (hexo.theme.config.sidebar.menu == undefined) {
    hexo.theme.config.sidebar.menu = [];
  } // default widgets


  if (hexo.theme.config.sidebar.widgets.repo_info == undefined) {
    hexo.theme.config.sidebar.widgets.repo_info = {
      layout: 'repo_info'
    };
  }

  if (hexo.theme.config.sidebar.widgets.wiki_more == undefined) {
    hexo.theme.config.sidebar.widgets.wiki_more = {
      layout: 'wiki_more'
    };
  }
};