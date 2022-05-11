/**
 * tabs.js v2 | 基于NexT修改： https://theme-next.js.org/docs/tag-plugins/tabs
 */
'use strict';

var tab_index = 0;

module.exports = function (ctx) {
  return function (args, content) {
    var el = '';
    var arr = content.split(/<!--\s*(.*?)\s*-->/g).filter(function (item, i) {
      return item.trim().length > 0;
    });

    if (arr.length < 1) {
      return el;
    }

    var tabs = [];
    arr.forEach(function (item, i) {
      if (item.startsWith('tab ')) {
        tabs.push({
          header: item
        });
      } else if (tabs.length > 0) {
        var tab = tabs[tabs.length - 1];

        if (tab.body == undefined) {
          tab.body = item;
        } else {
          tab.body += '\n' + item;
        }
      }
    });
    args = ctx.args.map(args, ['active', 'align']);
    var tabName = 'tab_' + ++tab_index;
    var tabActive = Number(args.active) || 0;
    var tabId = 0;
    var tabNav = '';
    var tabContent = '';
    tabs.forEach(function (tab, i) {
      var caption = tab.header.substring(4);
      var content = ctx.render.renderSync({
        text: tab.body,
        engine: 'markdown'
      }).trim();
      var abbr = tabName + ' ' + ++tabId;
      var href = abbr.toLowerCase().split(' ').join('-');
      var isActive = tabActive > 0 && tabActive === tabId || tabActive === 0 && tabId === 1 ? ' active' : '';
      tabNav += "<li class=\"tab".concat(isActive, "\"><a href=\"#").concat(href, "\">").concat(caption || abbr, "</a></li>");
      tabContent += "<div class=\"tab-pane".concat(isActive, "\" id=\"").concat(href, "\">").concat(content, "</div>");
    });
    tabNav = "<ul class=\"nav-tabs\">".concat(tabNav, "</ul>");
    tabContent = "<div class=\"tab-content\">".concat(tabContent, "</div>");
    el += '<div class="tag-plugin tabs"';

    if (args.align != undefined) {
      el += ' align="' + args.align + '"';
    }

    el += 'id="' + tabName.toLowerCase().split(' ').join('-') + '"';
    el += '">';
    el += tabNav + tabContent;
    el += '</div>';
    return el;
  };
};