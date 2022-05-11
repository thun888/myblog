/* global hexo */
'use strict';

hexo.on('generateBefore', function () {
  // Merge config.
  require('./lib/config')(hexo);

  require('./lib/doc_tree')(hexo);

  require('./lib/utils')(hexo);
});
hexo.on('ready', function () {
  var _require = require('../../package.json'),
      version = _require.version,
      homepage = _require.homepage,
      repository = _require.repository;

  hexo.log.info("Welcome to Stellar ".concat(version, "\nDOCS  ").concat(homepage, "\nREPO  ").concat(repository.url, "\n  "));
});