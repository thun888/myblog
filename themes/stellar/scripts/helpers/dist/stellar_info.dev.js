'use strict';

hexo.extend.helper.register('stellar_info', function (args) {
  var repo = 'https://github.com/xaoxuu/hexo-theme-stellar';
  var wiki = 'https://xaoxuu.com/wiki/stellar/';
  var issues = repo + '/issues/';

  var _require = require('../../package.json'),
      version = _require.version;

  var cfg = hexo.theme.config.stellar;

  if (!args) {
    return repo;
  } else if (args == 'name') {
    return 'Stellar';
  } else if (args == 'version') {
    return version;
  } else if (args == 'issues') {
    return repo + '/issues/';
  } else if (args == 'tree') {
    return repo + '/tree/' + version;
  }

  return '';
});