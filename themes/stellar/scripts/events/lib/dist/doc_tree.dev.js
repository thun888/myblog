/**
 * doc_tree.js v1 | https://github.com/xaoxuu/hexo-theme-stellar/
 */
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function page(page) {
  return {
    title: page.title,
    path: page.path,
    wiki: page.wiki
  };
}

module.exports = function (hexo) {
  var data = hexo.locals.get('data');

  if (hexo.theme.config.wiki == undefined) {
    hexo.theme.config.wiki = {};
  }

  if (hexo.theme.config.wiki.projects == undefined) {
    hexo.theme.config.wiki.projects = {};
  }

  if (data.projects) {
    for (var _i = 0, _Object$keys = Object.keys(data.projects); _i < _Object$keys.length; _i++) {
      var id = _Object$keys[_i];
      hexo.theme.config.wiki.projects[id] = data.projects[id];
    }
  } // wiki 配置


  var wiki = hexo.theme.config.wiki; // wiki 所有页面

  var wiki_pages = hexo.locals.get('pages').filter(function (p) {
    return p.layout === 'wiki' && p.wiki != undefined && p.wiki.length > 0;
  }); // 数据整合：项目标签

  var tagNames = [];

  for (var _i2 = 0, _Object$keys2 = Object.keys(wiki.projects); _i2 < _Object$keys2.length; _i2++) {
    var _id2 = _Object$keys2[_i2];
    var proj = wiki.projects[_id2];
    var tags = proj.tags;

    if (tags) {
      if (typeof tags == 'string' && tags.constructor == String) {
        if (tagNames.includes(tags) === false) {
          tagNames.push(tags);
        } // 类型转换


        tags = [tags];
      } else if (_typeof(tags) == 'object' && tags.constructor == Array) {
        tags.forEach(function (tag, i) {
          if (tagNames.includes(tag) === false) {
            tagNames.push(tag);
          }
        });
      }

      wiki.projects[_id2].tags = tags;
    }
  } // 补充未分组的项目


  var projs = Object.keys(wiki.projects);
  wiki_pages.forEach(function (p, i) {
    if (projs.includes(p.wiki) == false) {
      if (wiki.projects[p.wiki] == undefined) {
        wiki.projects[p.wiki] = {};
        wiki.projects[p.wiki].pages = [];
      }

      var proj = wiki.projects[p.wiki];

      if (proj.description == undefined) {
        proj.description = p.description;
      }

      wiki.projects[p.wiki].pages.push(p);
    }
  }); // 补充项目名称和首页

  for (var _i3 = 0, _Object$keys3 = Object.keys(wiki.projects); _i3 < _Object$keys3.length; _i3++) {
    var _id3 = _Object$keys3[_i3];
    var _proj = wiki.projects[_id3];
    _proj.id = _id3;

    if (_proj.title == undefined || _proj.title.length === 0) {
      _proj.title = _id3;
    }
  } // 补充 order


  wiki_pages.forEach(function (p, i) {
    if (p.order == undefined) {
      p.order = 0;
    }
  }); // 数据整合：每个项目的子页面

  var _loop = function _loop() {
    var id = _Object$keys4[_i4];
    var proj = wiki.projects[id];
    proj.pages = wiki_pages.filter(function (p) {
      return p.wiki === id;
    }).sort('order');
    proj.pages.limit(1).forEach(function (p, i) {
      proj.homepage = p;
    }); // 内页按 section 分组

    sectionConfigs = [];

    if (proj.sections) {
      for (var _i7 = 0, _Object$keys7 = Object.keys(proj.sections); _i7 < _Object$keys7.length; _i7++) {
        var t = _Object$keys7[_i7];
        var range = proj.sections[t];

        if (range.length > 1) {
          sectionConfigs.push({
            title: t,
            from: range[0],
            to: range[1]
          });
        }
      }
    }

    sections = [];
    sectionConfigs.forEach(function (sec, i) {
      var pages = proj.pages.filter(function (p) {
        return p.order >= sec.from && p.order <= sec.to;
      });

      if (pages && pages.length > 0) {
        sections.push({
          title: sec.title,
          pages: pages
        });
      }
    });
    proj.sections = sections;
  };

  for (var _i4 = 0, _Object$keys4 = Object.keys(wiki.projects); _i4 < _Object$keys4.length; _i4++) {
    var sectionConfigs;
    var sections;

    _loop();
  } // 全站所有的项目标签


  var all_tags = {};
  tagNames.forEach(function (tagName, i) {
    var projs = [];

    for (var _i5 = 0, _Object$keys5 = Object.keys(wiki.projects); _i5 < _Object$keys5.length; _i5++) {
      var _id = _Object$keys5[_i5];
      var proj = wiki.projects[_id];

      if (proj.tags && proj.tags.includes(tagName) === true && projs.includes(tagName) === false) {
        projs.push(proj.id);
      }
    }

    all_tags[tagName] = {
      name: tagName,
      path: (hexo.config.wiki_dir || 'wiki') + '/tags/' + tagName + '/index.html',
      items: projs
    };
  }); // 整合相似项目

  for (var _i6 = 0, _Object$keys6 = Object.keys(wiki.projects); _i6 < _Object$keys6.length; _i6++) {
    var _id4 = _Object$keys6[_i6];
    var _proj2 = wiki.projects[_id4];

    if (_proj2.tags) {
      var related = [];

      _proj2.tags.forEach(function (tagName, i) {
        var tagObj = all_tags[tagName];
        related = related.concat(tagObj.items);
        related = _toConsumableArray(new Set(related));
      });

      _proj2.related = related;
    }
  }

  wiki.all_tags = all_tags;
  wiki.all_pages = wiki_pages;
};