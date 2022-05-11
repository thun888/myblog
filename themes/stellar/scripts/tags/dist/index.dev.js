/* global hexo */
'use strict';

var postTabs = require('./lib/tabs')(hexo);

hexo.extend.tag.register('tabs', postTabs, true);
hexo.extend.tag.register('subtabs', postTabs, true);
hexo.extend.tag.register('subsubtabs', postTabs, true);