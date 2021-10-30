/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","2c1d63b1ff335f47d64bc713a3587fa9"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","0273306c6b11c9ed204881ee81409878"],["/2021/为Stellar主题添加HPP说说功能/index.html","c2687f1105cd61a8d00f5d690a1e8ee2"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","16088adbd448b4a79e8ecbafe2f5e8c6"],["/2021/把玩intel的开发服务器/index.html","fd555816ca13a97184386b66b0092954"],["/2021/搭建Teambition网盘的目录索引/index.html","cc001d25b96d59015a70932b5001143b"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","0e91751407239a98ada4d282840eba5b"],["/2021/解决VSCode安装Go扩展报错/index.html","7169f782a73fe82529c23ff57266952d"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","fe66ee5e525e83ce130ad85ec66fb638"],["/2021/记一次简单的水卡破解/index.html","7ce11c1ddc3009de04ba331aaf73cac3"],["/2021/高质量地从ico转为svg/index.html","255d103c3d15d54f1c4fec90173a8728"],["/404.html","89e3572676975f16a97531b8c71b2170"],["/about/index.html","c2cd8b1b04d014b7996bbb9fe6be239d"],["/archives/2020/11/index.html","19ea0543305b3c2152adc474b369cf9a"],["/archives/2020/index.html","a37b80c2744ae2e4aa03d0f3f792f0bc"],["/archives/2021/01/index.html","278be55d2f3915049e5255aff06024ab"],["/archives/2021/02/index.html","f19a455b893013bdff3480a7196d6943"],["/archives/2021/04/index.html","16b4834d34214aafca0193330399a307"],["/archives/2021/05/index.html","b7978610f36aec1966ced241557fa4a6"],["/archives/2021/06/index.html","6c14311a2c37f5fb0d2fd9282ce5345a"],["/archives/2021/07/index.html","09882c4ee8b66d0c10c7c6f63c318190"],["/archives/2021/08/index.html","621604876e8c30f106697da064f21f39"],["/archives/2021/index.html","3695d6a3ebbbd9ab9e7d08ce469643f0"],["/archives/index.html","8ac06466876d07d3db282946105f0868"],["/archives/page/2/index.html","6d41b07579a5d76c21d25c5b35b6e606"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","b8465734848bb5f7e0adf7c15b3dd085"],["/friends/index.html","acaaef251861a7ee7ff6776b8842009f"],["/htalk/index.html","b079998626857b501448097751065cca"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","cc7ad9ff83dc0a2171b1b52c1748b24c"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","591f566c5b02a0e9a1cc8271f92fbbca"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","e31b71ee1aac57684f08ec46001a819f"],["/morecss/search.css","a43c3133762717ae4100a0bc937dfbd1"],["/morecss/szgotop.css","fe2177c4089897f326fa3720a7eaeed0"],["/page/2/index.html","d7ef3fefab85b912eb7554c67150bb6e"],["/say/index.html","c2e86c8231b4f487e983a8c54e68d101"],["/sw-register.js","e075759c42706c0fc03ecdbd2cb742aa"],["/tags/Clouddlare/index.html","c78c27f8e26c549692bd5dd0862271c1"],["/tags/Go/index.html","3738b8e76449313dd70baa204ad3221c"],["/tags/Intel/index.html","1188431e873d972386afb93a4fa53edd"],["/tags/MIUI/index.html","6e1a455d93187183686fd721675849db"],["/tags/blog/index.html","dc41c88829940861cb2c8c9e90be7d08"],["/tags/free/index.html","780b6594b1c8487338423ca1d96bb6c1"],["/tags/index.html","56744ed7e17083e003c69277af077a02"],["/tags/linux/index.html","0bac5623ddccb365303a2d61e96e5c6b"],["/tags/oneindex/index.html","d3d4b79cc9eb5aabd7d48a8ba33a77f9"],["/tags/web/index.html","1b638db5ae07be71e802a8bc54bbda26"],["/tags/甜糖/index.html","97f3d5939f8f8f5da0065af9be6e5313"],["/tags/网站/index.html","055ecd892c6107ba3d0aeab66d00dfd8"],["/tags/转换/index.html","e7ee84b6f64f7fafec6c66df7317b973"],["/tools/ghcdn/css.css","7e648a060987b9fb41d1df49598da8e4"],["/tools/ghcdn/index.css","c6faaa7aaf296963bc8791a94dc287da"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","3bf773e344c86c73643385af69d3ca7a"],["/wiki/Artalk/API/index.html","22f8159a2b0746fef304b8457c9a883e"],["/wiki/Artalk/QandA/index.html","c0b7e6f997ec82796da5eea5dc9c59db"],["/wiki/Artalk/about/index.html","a1fa8bf3e663112ae689972065b80eb4"],["/wiki/Artalk/develop/index.html","a014f0ef65db18912fc291e325e34a42"],["/wiki/Artalk/index.html","47145e6099a5862f64a858914c0b79aa"],["/wiki/Artalk/install-go/index.html","c69e9e9972cee65ecaff32434b262575"],["/wiki/Artalk/install/index.html","c86963d9ce620ade1068995b7aabe86a"],["/wiki/Artalk/more-url/index.html","c3a9baa82b121865f3c86a31fb82d883"],["/wiki/Artalk/play/index.html","26649be7d2d3e3dd3a39c1a2f5bfe64d"],["/wiki/Artalk/use/index.html","7a0457400b13bef51e0b72b0b80f96c0"],["/wiki/index.html","ca67790050d6df73f879427b0e358da0"],["/wiki/杂物间/camc.html","2566bd113430e1b7910a840c534c69d2"],["/wiki/杂物间/index.html","706ee65220e83978f2afca6e09570f68"],["/wiki/杂物间/归档/Free Minecraft Dungeons.html","68f2268b5851e2a7708e6f6793e7b90a"],["/wiki/杂物间/归档/GitHub打不开的临时方法.html","b10a451293404da16f37a927097436d5"],["/wiki/杂物间/归档/hexo更新pages出错应急方法.html","5f08e335ee8e640b37400b2e61db560e"],["/wiki/杂物间/归档/免费游玩《戴森球计划》.html","3e554caa0a83bfba0c7992a4b8e813fa"],["/wiki/杂物间/归档/定时关机.html","b0e3071006bb366579219a38324d56b5"],["/wiki/杂物间/归档/弹出C盘の快乐.html","fdb710c6d4f0c9e7981bc456312122aa"],["/wiki/杂物间/归档/杂物.html","170648f22b7937a2c97ad0054e0c6461"],["/wiki/杂物间/归档/来在MC里玩电脑.html","03838a9788ee952d6c48de4178580503"],["/wiki/杂物间/归档/现已通过myssl认证.html","bcf8945cbaf04b46bbdd142229bbd287"]];
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
