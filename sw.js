/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","456599f9ed71e76753d1e2befd3f2591"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","f8fc5e7e3ea47e985ae4057868c6dcf6"],["/2021/为Stellar主题添加HPP说说功能/index.html","c7bfc65499988a82566c1b01e79b388a"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","8830edf2c3b09e351a9c1e2b2dfdf444"],["/2021/把玩intel的开发服务器/index.html","e8ba5a5cb503814d704ea57611d0bcd2"],["/2021/搭建Teambition网盘的目录索引/index.html","7f53d7d7702bba354486a7f0344ea181"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","639ebd8d3528b341ed5c7a4b2ec3121d"],["/2021/解决VSCode安装Go扩展报错/index.html","4b71281254ec1485b60cdb0fa1dbf03e"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","20615a6962ac622ba4238c4d03bdb1b9"],["/2021/记一次简单的水卡破解/index.html","088df3aea55163b16a52337706ffd6c0"],["/2021/高质量地从ico转为svg/index.html","b72f4ed614a9b17e77aad4be437dd076"],["/404.html","7e68aca7d69f89791f20fa6d8fe1a112"],["/about/index.html","22b4d34a65be059722a77e98dd1714ef"],["/archives/2020/11/index.html","7d72ffa8f16037cfba9dd8d92dbb869d"],["/archives/2020/index.html","99bab2da248b510583080a78eb6a4124"],["/archives/2021/01/index.html","ccaef74562462b47419ceeeaed72bb53"],["/archives/2021/02/index.html","29233701b8669c93eee851a3cf74cf63"],["/archives/2021/04/index.html","ed424ad8be2cdbfdffe8d145fd000470"],["/archives/2021/05/index.html","3ce017811c04afe171bf2414c76b66bd"],["/archives/2021/06/index.html","1792fde460152015e311fb786a89585a"],["/archives/2021/07/index.html","1a17bbb15c2a15dfdcbb2399c5489d62"],["/archives/2021/08/index.html","9c6af0ac0478c6cecc7a9798792af103"],["/archives/2021/index.html","67fddeefa0cc0c543e6156d4dcae1787"],["/archives/index.html","a491a1cda56e4793ed91dfc92baae10e"],["/archives/page/2/index.html","d47f3465de845a4e1e9c31fd57a2cf93"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","02add768ce9977f851afe632d30e0987"],["/friends/index.html","2fe9b3537c473de7a24c1592073c2022"],["/htalk/index.html","15a4b4b34fa5d9f7e557d6fc2febabf5"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","2dcd6abff701b17c208bf33ddda0f2b2"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","6fadcd950b63d3d28e3167c077c95cc2"],["/morecss/szgotop.css","53e1ba58199c13d37225cb14c50f67c6"],["/page/2/index.html","891296cbb6098d2ab336e4a9b4ea7f57"],["/say/index.html","0aa6ec1d49e7e1d9e9dc7e5dfb103ad1"],["/sw-register.js","a900bc8c7a330d52868e703349d9ec9d"],["/tags/Clouddlare/index.html","b179013c70bca1756a33e2227cbeef2c"],["/tags/Go/index.html","9a14be7075068e0a541a027c464d2f9b"],["/tags/Intel/index.html","51282d1bc8f2529ae2291d599572f964"],["/tags/MIUI/index.html","0a398ae8bd6e688e1492744a411d46e4"],["/tags/blog/index.html","3f2f7b227714654b733740f903d0bfe4"],["/tags/free/index.html","fb1577e415cc090cd9d3f7ab442bc3e3"],["/tags/index.html","eafe1a5509d8c8b5940fcbbc4853c967"],["/tags/linux/index.html","e777d1c63c68cb00901195bf7a3f5e50"],["/tags/oneindex/index.html","76f7200dcd87b5ef8fb72c3efe28bfe6"],["/tags/web/index.html","e7efd61dcabf12d2a3a72d3f3bb86758"],["/tags/甜糖/index.html","911afe7fa70cfaedb75c1b6a618e2252"],["/tags/网站/index.html","f39ae750684c496ba3590abb03fbad4d"],["/tags/转换/index.html","40823021eb9738c5d7dc7046a073d011"],["/tools/ghcdn/css.css","eac0e1e918ded43bfe0c841a71f8f0b3"],["/tools/ghcdn/index.css","74e75c571d3336a4d031cff7863cc164"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","0faf592c5227ed2fb584f61cd282d361"],["/wiki/Artalk/API/index.html","d0e0d5c5d0ec3c9e03ad031e047bbaf6"],["/wiki/Artalk/QandA/index.html","d2e031581cdb7dbc644c582d1d013168"],["/wiki/Artalk/develop/index.html","3ab1b77c0289f9a9996fc004dd5c3200"],["/wiki/Artalk/index.html","68c7347985cea3778899bd53609e24b7"],["/wiki/Artalk/install-go/index.html","02f703de64809a5a70d3697b58605f04"],["/wiki/Artalk/install/index.html","660001c4900c44b38a3d6fb3a19506a4"],["/wiki/Artalk/more-url/index.html","cacfbac3d0f3d0100c19baf7296508e7"],["/wiki/Artalk/play/index.html","027a479605ccb21203300ea89fa0d157"],["/wiki/Artalk/use/index.html","85e7043dc8fac196702c751a6773e532"],["/wiki/index.html","b64468fa980c78bfef37f72ab3ced6ac"],["/wiki/杂物间/camc.html","32dc1530e7871b25ac7c5cfb0ee17082"],["/wiki/杂物间/index.html","76585672065c9279fbf38125ddbaf54c"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","ef058b11c29928d9485d0525ff74fe76"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","27c5808c669ef822ad00879e21c4973f"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","3b9774d2602ae0a503f33a5a9b37411e"],["/wiki/杂物间/old-pages/index.html","cf37e75a2be9f70026cb56867dd6792d"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","d149d095b581384b294c50545dada634"],["/wiki/杂物间/old-pages/定时关机.html","b8f9f81e0f677d2f4a7f89c69abc057d"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","1b8bfacce0893febe410f9259a696283"],["/wiki/杂物间/old-pages/杂物.html","9d7cf5ff1ea6c07e18878d59bb2949fb"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","a7c0724add52eb24b7abe255bb0596d2"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","6c488c065fb2244f7914ffe3ecc890aa"]];
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
