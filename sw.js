/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","5d3e2a5f3ff2825dde6ea954804ab1df"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","c1d8499a471470d5a083b438ccc7af71"],["/2021/为Stellar主题添加HPP说说功能/index.html","c27c31b1ecd60b8a2b9d313fdda9544e"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","62adc0c886b1b920bd17ebf679a87b68"],["/2021/把玩intel的开发服务器/index.html","796a659a6514ff6d86983873200f9c96"],["/2021/搭建Teambition网盘的目录索引/index.html","5ce6d3212dcb53f93a485ce60290fc7c"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","54184c746029871d5f43e8e9334ef995"],["/2021/解决VSCode安装Go扩展报错/index.html","6951dc5974b1ab61dd808ff8bd32d03f"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","772b387782e3dc5e03fbdec3934040f8"],["/2021/记一次简单的水卡破解/index.html","63eed6360f64fd9fab207af77f9e2a75"],["/2021/高质量地从ico转为svg/index.html","2029b73230cf8a3d595907966c76ed40"],["/404.html","f575220ab794cdf23787bb5e00884160"],["/about/index.html","675d4cc928c13ba99ece71c12652562b"],["/archives/2020/11/index.html","cb49a1f96d2e7e4e10114bd9d0ffb16f"],["/archives/2020/index.html","64a84dd847dbc6639a8b93636911bd5f"],["/archives/2021/01/index.html","589cd713cef5eaa17a63f0d9f09535a5"],["/archives/2021/02/index.html","e006c5000499175ef474e980448f040d"],["/archives/2021/04/index.html","0f04eb14219a7f300feb8457564192ce"],["/archives/2021/05/index.html","0b0836ffa7a71533b26cbc21703398d4"],["/archives/2021/06/index.html","a20cfb6c53a8a649c4725bad075bd922"],["/archives/2021/07/index.html","1a334767eedfe9be43575c8baede7676"],["/archives/2021/08/index.html","e35da3d8f9f1f7335924434386f81f48"],["/archives/2021/index.html","3d4899fefc7c2c490b7f5ec13424fa72"],["/archives/index.html","ce16bbdd896067e9105798a15659666d"],["/archives/page/2/index.html","d60d718674199b381878c81eaa692651"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","fdd85473ea69678377ef13c50758f997"],["/friends/index.html","b0bbeb8fc112934793a5d7e796345ee5"],["/htalk/index.html","7126838ff027314330002f1802e68b4c"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","5024678a0b831acd2125ac5b7fc19653"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","ac6326df790014eadb98c0402935785c"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","a26fa66498613d43155cbc072e4a9252"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","50f583b3a3eef3eb57241f66981d45f8"],["/morecss/szgotop.css","07084ab443190e0e9149180c6a336c4c"],["/page/2/index.html","b8706e43b56bd0480f1afc2719b97fc3"],["/say/index.html","dbf395c0809c6574dfa43a539ba60a4b"],["/sw-register.js","7ca8b04be5a50094c4ba0b744ba2f8f3"],["/tags/Clouddlare/index.html","a7cf93114f338daeadb90887f6fc74eb"],["/tags/Go/index.html","8afa5b3339fbbdcec43014f126c7457c"],["/tags/Intel/index.html","c2ac1dbaf719526cf7eee00b9e91fdcc"],["/tags/MIUI/index.html","1b95120c5f87add751adc5b6beab21cd"],["/tags/blog/index.html","603842882f6d3aa61a14e6ad568cc782"],["/tags/free/index.html","fb0dd5a29cab7306803dadf402dfe616"],["/tags/index.html","42d5bf8a88745a9af443e5ba477afc45"],["/tags/linux/index.html","954e26ccff7a0763dd4cd7effdd76958"],["/tags/oneindex/index.html","b7f461ee1cff84fd4bf006e5ae894e81"],["/tags/web/index.html","6b32f47033733f60032cfd3973ed5d77"],["/tags/甜糖/index.html","1021371d1a2daf7e4997c1b95733f3e8"],["/tags/网站/index.html","99a71fa8cdbe559e89aa135952b10515"],["/tags/转换/index.html","c743f2e5c19072d8c8383789036e9894"],["/tools/ghcdn/css.css","727e5db5356e2767e613129b57dec437"],["/tools/ghcdn/index.css","743f430ea8c7a99ed9b233b6e7c856f4"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","dac93991a2e6b5774bcbdd0f7c7d3385"],["/wiki/Artalk/API/index.html","1a3631ceb24cffc9a5ef041f3ca32dd5"],["/wiki/Artalk/QandA/index.html","72425305a6648811d351f34442b786d3"],["/wiki/Artalk/develop/index.html","448d35bea8fea36d04b8cc2e7c9dd159"],["/wiki/Artalk/index.html","0f5ec4fc16d1ad04fd666b39552f0284"],["/wiki/Artalk/install-go/index.html","389595de447ab2ecef77e65f83b46ea0"],["/wiki/Artalk/install/index.html","02ed6984396de70ed5fff6a0f415cbb0"],["/wiki/Artalk/more-url/index.html","64602f1f4d478f332c5ffeed0a178fd6"],["/wiki/Artalk/play/index.html","259b2a70b2ffb6e7fed0be40354a19b2"],["/wiki/Artalk/use/index.html","9fe490a5008f4731f6c15bdbbd0082df"],["/wiki/index.html","c6e8d256aae67273aa876d56429b55f2"],["/wiki/杂物间/camc.html","16abd89ecef815293ff99dad90d5188e"],["/wiki/杂物间/index.html","5fafc924b8912e83827e7728fabd891b"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","556c1a202517fa3660ec049bf71a56a3"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","f7a39d7e40f3b0ea8807f215c9d90122"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","079861249a2cda2e5146f0bac9947225"],["/wiki/杂物间/old-pages/index.html","6d814bdc9149147b702ac723cdb6cb12"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","e762fc5a6e94d3c7660c73e23d88deb9"],["/wiki/杂物间/old-pages/定时关机.html","42f5ee4c0dc2d0e006a1d057240efb83"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","352051c3afb65c1215a15a7937c6d3a6"],["/wiki/杂物间/old-pages/杂物.html","de83b90d8a4b1ed238f938e86095ace9"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","4f85fcd2ce6c8a1055d403b1bcb61a89"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","072970c1498f49c82ad7c83fd7781616"]];
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
