/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","ed0a9e612b1eeda29f1db85d66c44243"],["/2020/hexo更新pages出错应急方法/index.html","6db1bd52f91fd22fd2115d4fe6cd81cb"],["/2020/定时关机/index.html","fca5e69248681161925227a049980b83"],["/2020/弹出C盘の快乐/index.html","0f9159db48c2836e80f2800e3bca6c02"],["/2020/杂物/index.html","3f441250cee9aedaa2cda6303e7b1e8a"],["/2020/来在MC里玩电脑/index.html","307feadcbfb68ef60b8e4e0e8a62df84"],["/2020/现已通过myssl认证/index.html","176dd3fb77d6bd3c4d979d2f094d9d08"],["/2020/用batocera搭建属于你的游戏天地/index.html","79aaa78db3d4839d371c5ba7949ebaaa"],["/2021/GitHub打不开的临时方法/index.html","6f951dd3a7d6141d214aee491bdf6353"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","56afdef15586e52e1ac953606b5ce7da"],["/2021/为Stellar主题添加HPP说说功能/index.html","ecae40b3db3edcb07f424ed8829cb1b8"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","10ace4f996e7388cb155dff3abcb287a"],["/2021/免费游玩《戴森球计划》/index.html","c36fea263b6513a778cbadf961516642"],["/2021/把玩intel的开发服务器/index.html","2bcacd760aa3876414c233bde97ebfcd"],["/2021/搭建Teambition网盘的目录索引/index.html","620473a43dbbd3a505b1ae75a886c386"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","b23bbeb8a1fbbf1645e6b7ca601a2b44"],["/2021/解决VSCode安装Go扩展报错/index.html","ad9072e1f3ad0d95eda519cd8a440795"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","f00bee98d1cb5f0c9f130661a14dfe98"],["/2021/记一次简单的水卡破解/index.html","6041228df33ed006bd2f68f1251b00d1"],["/2021/高质量地从ico转为svg/index.html","84697deae63bbce3e5a73dd09a123b07"],["/404.html","79889964ba9a02ef48e176cd039bdcd3"],["/about/index.html","b015642dcf7dedc51bdcd20353c2b0ce"],["/archives/2020/01/index.html","fae6a13f09ae2e03f92af8859e285326"],["/archives/2020/08/index.html","cd19a881dbf13005040d3fc6253f6756"],["/archives/2020/10/index.html","afcfa9d8ed1124eef311039d64999437"],["/archives/2020/11/index.html","d45b68cbd2a319cc371088dbf56740a2"],["/archives/2020/12/index.html","d7d87862b9cb10af951c3df1b22958ab"],["/archives/2020/index.html","85e0bc803b55566d72844b4496469048"],["/archives/2021/01/index.html","87b131db6506a8b82a336c748706cf1f"],["/archives/2021/02/index.html","994f49998dbadc72d337009d6a8f333f"],["/archives/2021/04/index.html","7a8cb7b64cf7b57306d701aaa3588697"],["/archives/2021/05/index.html","ee0083d1c4753bea4ab29c1fce0e2586"],["/archives/2021/06/index.html","ae2ed1929772ee3a26d0984314a485bf"],["/archives/2021/07/index.html","f858694ff7b37f39e71a6bf27e46f2ec"],["/archives/2021/08/index.html","a3ddac6cac42702ca971ac69852a12e7"],["/archives/2021/index.html","d29e74e4945f89ed85596abc78d6a510"],["/archives/2021/page/2/index.html","84486a73bb104b9f70d5b21404b856f9"],["/archives/index.html","cd73673dc1e651d2ee6457163a2a0ef4"],["/archives/page/2/index.html","9beb387340bcf8f668f9c5c0a6484705"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","25e2c4c2d3be99fc65b8a26bd0594c9e"],["/friends/index.html","5367dff25e7a0ea938cdd23df9320059"],["/htalk/index.html","c3bc28c5589f746e233b4725aca67986"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","a290d6542db7b0e6fb21743d9d2cde8f"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","092336d50e9b619b432ff05369898c87"],["/morecss/search.css","7f38b477ad2190dd6ed5a8c3d982731a"],["/morecss/szgotop.css","a1490407cd9383e29932519e7b696abf"],["/page/2/index.html","4dce6eed1f7ff56436666a0de786bd2c"],["/say/index.html","e0fe7f087b6517c42204bd6885e72038"],["/sw-register.js","d06da74e0bbfe149bb68eafe69d5debe"],["/tags/Clouddlare/index.html","c15b6f416bb0d30e67f41f81ce3b68d7"],["/tags/Go/index.html","adfafd055a02d751102164cb95618a72"],["/tags/Intel/index.html","11a82e9a52fd78761c006a10b41faf7c"],["/tags/MIUI/index.html","6d0f52f40ee4cb51a23e40ddb8aab613"],["/tags/Minecraft/index.html","a963061fea13e31b4909e9e6ede44be5"],["/tags/blog/index.html","d73b4e92ae4fb5147c9ab83d5522a4db"],["/tags/cmd命令/index.html","66f4073d27c1a3a9dd5533eb569a8f5e"],["/tags/free/index.html","01dbfb2e77880ee2d2021caaf7375ba2"],["/tags/github/index.html","dbc38614fea38918dc5bf6d89016cc0e"],["/tags/index.html","a410483246ff86590fbdc81b211cab46"],["/tags/linux/index.html","05e49e6324801e95d451f6ce08df310e"],["/tags/oneindex/index.html","f270aa29cf18c969a4698bba714d2694"],["/tags/ssl认证/index.html","1d87badabc6a6709a35202c1803b2fae"],["/tags/web/index.html","3bd2639a3163249e54eafd2ee38ee526"],["/tags/甜糖/index.html","ce133ce0f9eda86759c53c8094fa8110"],["/tags/网站/index.html","6bbb1b54ae60bcae35cb1d98e8fdd930"],["/tags/转换/index.html","208f704777ebdc4d953f4d911e4f2051"],["/tools/ghcdn/css.css","12623df077f956bcbdbdc4ddb575d53b"],["/tools/ghcdn/index.css","31ae370daa9e5e70eeeabc0074b0cc29"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","ae85c3007542740051924bc737a65b80"],["/wiki/Artalk/API/index.html","60d5181cb2a6b44c39b0dc4ff06c4f0e"],["/wiki/Artalk/QandA/index.html","db77dc5fc83339f175389f9a872a5170"],["/wiki/Artalk/about/index.html","d02ad871b283e85670a6a83d1a4148d5"],["/wiki/Artalk/develop/index.html","c8e5aa2e793db0211d47003b97d538e7"],["/wiki/Artalk/index.html","54dc1199458eae3f722f136bbdb886f1"],["/wiki/Artalk/install-go/index.html","d14542ea5010c0e4d20b8645bb504813"],["/wiki/Artalk/install/index.html","3078e3b6709563322b4dc4248f8d6a41"],["/wiki/Artalk/more-url/index.html","e686d206c9145457e1a5f22f3db336c3"],["/wiki/Artalk/play/index.html","43d6b2fd066978455ed3e3689f24d018"],["/wiki/Artalk/use/index.html","89da0768a19cccf623ab554d138ef24a"],["/wiki/index.html","43c178f6a9e85823356125e1557aa326"],["/wiki/杂物间/camc.html","5f31c14711985f45d883fe3de1941612"],["/wiki/杂物间/index.html","40384d3a63ba4ca2196c244ffefcae84"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
