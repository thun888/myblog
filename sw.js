/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","8015b358dd77fbcb217636580cf65b1f"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","a06f2a124a7b87489727ba5cab5247dc"],["/2021/为Stellar主题添加HPP说说功能/index.html","ac787b7888e8d48eeadb07db73819ed2"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","c0b2fd11232d60d18bcf1367839c8e6c"],["/2021/把玩intel的开发服务器/index.html","1daca5aaebe3923f18c1f68fa2772ec9"],["/2021/搭建Teambition网盘的目录索引/index.html","33169ab8947dd7b7f126594bd9324d78"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","421aaa0598ae630eda0b0464eaab96b1"],["/2021/解决VSCode安装Go扩展报错/index.html","f56261f75f20c906a2c4c3f5ed1903bd"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","ced958dff3ab310466df97ef30762261"],["/2021/记一次简单的水卡破解/index.html","382bcd4831e12b7b9e510851b1c951c7"],["/2021/高质量地从ico转为svg/index.html","2072c5456821be1382be381fdfb95b11"],["/404.html","61a363f3d4bfad84da5c278656214bcf"],["/about/index.html","75713688d3559cf3076cc53d2090dcab"],["/archives/2020/11/index.html","3f98a91a4fe4d0aaf011645585d862ef"],["/archives/2020/index.html","4a9eba5200034c75fabdf8bddd48869d"],["/archives/2021/01/index.html","1260aed01a49c8406d6fb01bd417a327"],["/archives/2021/02/index.html","2a778870d8ff1703bf1c6b78e42d799e"],["/archives/2021/04/index.html","27d3f6f8f51d18a5f30a0e9b33876ea1"],["/archives/2021/05/index.html","315980025c87327eadedf3a25bee1ad0"],["/archives/2021/06/index.html","f15ea4dd6951ef2ec7b1ab0397643f81"],["/archives/2021/07/index.html","0f27ae47d54b582e3ee97a899a731175"],["/archives/2021/08/index.html","8fc04d407359abcf40d67772ba6dfd40"],["/archives/2021/index.html","5e1fe4557950207a0f2bc212e2e48b97"],["/archives/index.html","74683b4e8bb670a476ac0d7fa05247b4"],["/archives/page/2/index.html","947951bf45da7bc6847dab32022750a8"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","763434573448eb24c76ac8a4f7392ecc"],["/friends/index.html","8800bc578b01a634121642b2d4315a9a"],["/htalk/index.html","c7941be9c15a39e789485ebbc5992897"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","da9b158cb46e78ca3c88ce3feba784cd"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","ede22b149b9c7a4bcf6de2e42a68636c"],["/morecss/szgotop.css","4990362f390fa0c8f07960c6a021a256"],["/page/2/index.html","548b16032ee054349c283bffef5394b1"],["/say/index.html","eef9b527f8e4426e5d051bd1c1e211d3"],["/sw-register.js","7c32fe0f215a6ebfd261b233fc85d30f"],["/tags/Clouddlare/index.html","438f2f2f8b0dc4285cb89f9f0358454c"],["/tags/Go/index.html","8cc447e8d70fa29f4a9599be232887df"],["/tags/Intel/index.html","bfa485ab20ebcc9b8e15dde3cabe7cef"],["/tags/MIUI/index.html","11330f38f534ae0da034fde30cc848f8"],["/tags/blog/index.html","143750b45ad01c13b1c48352b1f82e28"],["/tags/free/index.html","d1b967a28bbe5f8de6765ff7dc6e24ad"],["/tags/index.html","390fbe990a6c0cde30e3275df1f5b771"],["/tags/linux/index.html","b053a28be4492e149523b44ca237d9de"],["/tags/oneindex/index.html","5412aa7ecbd97d4ab56b1117bf50fd94"],["/tags/web/index.html","915a7386ef1ff0e9e03624854d28c780"],["/tags/甜糖/index.html","2480ceb47fc941d78d894e7f15017623"],["/tags/网站/index.html","54ae3e780f0f7a96dd4c1f48d273e082"],["/tags/转换/index.html","2e88552650c0db7283d44184d60c0b4d"],["/tools/ghcdn/css.css","d2299424422346cb93cf857ce512148b"],["/tools/ghcdn/index.css","ed46f9ab35552d256e2792a65deb2a96"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","3a37cc158a5f2372f5db05ab2f716c59"],["/wiki/Artalk/API/index.html","b0ab1b98bf359888233b9392278896d7"],["/wiki/Artalk/QandA/index.html","c71be8d6e3b99436c82e58249b1626a0"],["/wiki/Artalk/develop/index.html","2e85317a5ae704187d7cef9cd1901577"],["/wiki/Artalk/index.html","1fa771e29d82e51f4639d1d93ebbfdf8"],["/wiki/Artalk/install-go/index.html","89430aec4e9494d1789754661d1e28f2"],["/wiki/Artalk/install/index.html","85d758f8a1cb6881809e92bed36da015"],["/wiki/Artalk/more-url/index.html","9de96d8cb5f88b2368765d75a25042f2"],["/wiki/Artalk/play/index.html","3fc2861f6941ce54f2f3b54a7762fbf2"],["/wiki/Artalk/use/index.html","d39a66472f0b450fe43e5ee1a32327af"],["/wiki/index.html","68f95baad83effdccc3ce6b52a769805"],["/wiki/杂物间/camc.html","175c1393d7270b7994c7361c82ecf029"],["/wiki/杂物间/index.html","55e668afd6f6ebcd76de676f1a5f05fc"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","c1400c03ce80b52d9d7aa6d363085512"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","61e11c840bab20e20f1667f25f3b94ae"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","02bc2793adf2dd98715f76cdd4b36913"],["/wiki/杂物间/old-pages/index.html","ea7dad173dd36c177d66363764b6964d"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","080fe479dd6e65c445c545b88e79f787"],["/wiki/杂物间/old-pages/定时关机.html","b93a453f1e1edfc0bfac98b5412e71e5"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","39543516c97621383862179059e0a938"],["/wiki/杂物间/old-pages/杂物.html","8745bc992897f6a9b6a1d258f765e73d"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","21f9478251436a6deb2f6267413a2d13"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","91d886052dd376fcebb21f5654cb5ca4"]];
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
