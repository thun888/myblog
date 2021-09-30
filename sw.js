/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","f3e45a4e652a2fdfb43b0463864dde1b"],["/2020/hexo更新pages出错应急方法/index.html","a2936c45ff86ac735d9012d1ff5830a7"],["/2020/定时关机/index.html","54d427e0af378efb7d4341df80e9c3c5"],["/2020/弹出C盘の快乐/index.html","49d3eb916ff586b2ed37b1ba99446093"],["/2020/杂物/index.html","57ede0954e4549045315b5d94fd64138"],["/2020/来在MC里玩电脑/index.html","79497dc71886138c7a9effd74ad557e0"],["/2020/现已通过myssl认证/index.html","5e5c152e85331c1752d2fb15d4ef680e"],["/2020/用batocera搭建属于你的游戏天地/index.html","26227016886b46b17145ae334e384936"],["/2021/GitHub打不开的临时方法/index.html","3c324341e7cdeff5d17e8b692cef0131"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","099afbaa4d9e66334f14cbb12047d48f"],["/2021/为Stellar主题添加HPP说说功能/index.html","8fc078ac362035f773124f0d495a5b95"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","05ef991d76f6bdbfa2c4b149ba9cafb9"],["/2021/免费游玩《戴森球计划》/index.html","b1c1753cbdb0a1b4192528978dd7c87c"],["/2021/把玩intel的开发服务器/index.html","75bad1a5c3586f38a93a2f6a3c485b36"],["/2021/搭建Teambition网盘的目录索引/index.html","d09292f6d5ac5faf7aadb285eb8000bb"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","ac680cc66b91926d55de72adbab755d3"],["/2021/解决VSCode安装Go扩展报错/index.html","96f20c805c782fb55b367510f24c3ecf"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","c8df68cc5a98c427b99a05bf8e7cd575"],["/2021/记一次简单的水卡破解/index.html","5f956ea4101d3aea25350f0b1ad66e69"],["/2021/高质量地从ico转为svg/index.html","74b6d35a42ccbc693fb3a7da18e07683"],["/404.html","8fe79746a642d7f1f73ead0fbcaa031a"],["/about/index.html","563007b354e153781618e90f6586c1be"],["/archives/2020/01/index.html","b66a064478045d05705219093ae05349"],["/archives/2020/08/index.html","0c32f5616a20426bb40f0bef65b7afa2"],["/archives/2020/10/index.html","767a9028b71298414649259bb732bc46"],["/archives/2020/11/index.html","0e8f2558501d5625b2b6948473efd636"],["/archives/2020/12/index.html","8e0c6e71c87eb663a18c9cb318c6ee23"],["/archives/2020/index.html","a818d9ac119ab13136ef6075a640306d"],["/archives/2021/01/index.html","3265974f948325e1e670e2c1b5eda345"],["/archives/2021/02/index.html","0f1a35cf3b37c4359095f0fce856d338"],["/archives/2021/04/index.html","2f6895c9ff0ac91b5a8ebb31f1c7b6d1"],["/archives/2021/05/index.html","855f3297af586ba25d0d984ef562d1ed"],["/archives/2021/06/index.html","afc50e11b4de9f96992f29b4a0eca5fc"],["/archives/2021/07/index.html","ed50bc7bd837c5826d1b6b9137d8d573"],["/archives/2021/08/index.html","2da85165eb89508f65a3705c9d7a67a8"],["/archives/2021/index.html","d9613a39d5a10759bf972165987a5caf"],["/archives/2021/page/2/index.html","994824fe4f978da5e47d5d360260d6a9"],["/archives/index.html","ea4814d1cb9ec70cbf5dd95a9442c349"],["/archives/page/2/index.html","57c65dcfd4f798300251abdcdbed33fb"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","827b087264afe109c8b627bf7e314360"],["/friends/index.html","0017db956bf3ed6f8651f4cd655c2d2a"],["/htalk/index.html","1553d38c4d9ef1637363943975e74a61"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","d35775bf40f9ffa99b0a4a324a9211f1"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","50c0d192edf37e641aede36bc408c70a"],["/morecss/search.css","6d2506ce00c3ed2c9658a96badca2c38"],["/morecss/szgotop.css","c5247743e4259ad278a72170a6f4e8ab"],["/page/2/index.html","564364fd2d446ba1543196935a8979e6"],["/say/index.html","d5b576ac17ebe20878e39cc159b5ad20"],["/sw-register.js","16f4ba4ab093815520fe3350c9f0a3da"],["/tags/Clouddlare/index.html","a5447c8bd5ef41860402bc35a568d984"],["/tags/Go/index.html","ce907b5525409a0bb5a9dfab4d5086ec"],["/tags/Intel/index.html","65b8b0e615993908a942fcdb6dbbced1"],["/tags/MIUI/index.html","4c587554676765bca3a0c36682efbcf0"],["/tags/Minecraft/index.html","bdac0a61ca48950ddfc2278ed24851d5"],["/tags/blog/index.html","cb89103c3ed00c4e55cc43e178b0aeec"],["/tags/cmd命令/index.html","b73c717ea8f20961663d6a0c8e6c4691"],["/tags/free/index.html","cec51a009dd80bebedd067c37c5009cc"],["/tags/github/index.html","0ec67cd2b4c777c3045dc1518080b9cb"],["/tags/index.html","1bb0a819ec29f5a199615c7a640a7615"],["/tags/linux/index.html","f0e3a98bf5134556c7937411dec274c3"],["/tags/oneindex/index.html","d36c60d2e062fdb9a63224d463174c12"],["/tags/ssl认证/index.html","63e957722886fad8e002ff917e45cba9"],["/tags/web/index.html","9071ba5e2eb1661e552ce6173371a8fe"],["/tags/甜糖/index.html","699f9fb174235dd733dde6baf0be55a1"],["/tags/网站/index.html","3b248c38476c8192a25e2e368b8fd737"],["/tags/转换/index.html","fe0e8e9d737de292885a84a3715483ee"],["/tools/ghcdn/css.css","cec686079f4809cb368c247a1cd10c05"],["/tools/ghcdn/index.css","792f0f27475e89049d15b8843ede299a"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","75f79678b090face70b90b5d857b9a6a"],["/wiki/Artalk/API/index.html","bcb289b401be95004dfbed91993f9871"],["/wiki/Artalk/QandA/index.html","a85c49881f8f70d7a8548c9b492ceb73"],["/wiki/Artalk/about/index.html","48ca10f55acf3e0d043fe54442647f76"],["/wiki/Artalk/develop/index.html","1a1792ae441be61f48eb65e9a9d2cee2"],["/wiki/Artalk/index.html","f93fcaded4a26a81778e39af34184770"],["/wiki/Artalk/install-go/index.html","91e330004dcdb310a7f63f1d19b93d12"],["/wiki/Artalk/install/index.html","9c828d8ebb49f84c3ec542b2e71180f1"],["/wiki/Artalk/more-url/index.html","8edbc05d73da12a2bbc1f92be041ddb2"],["/wiki/Artalk/play/index.html","224ffdfe1362a451567787b12d1ed22c"],["/wiki/Artalk/use/index.html","ddca172e63b139581a6b4d6bbe28c345"],["/wiki/index.html","b5d0a52072ba62cee4ce5b696e20a0ab"],["/wiki/杂物间/camc.html","824dc49d2aa1c3902a7eba0b74f19e62"],["/wiki/杂物间/index.html","3d3b846173f4a2695b94fbc1bedc7767"]];
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
