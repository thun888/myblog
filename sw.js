/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","f08b4dcda8bc090f6ae09a8457b36374"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","aa4b7bc8c53fdf33580c448a68dd52b3"],["/2021/为Stellar主题添加HPP说说功能/index.html","22e5b6b2c824881170b6c0d99a895fb1"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","1a15687706be04fb70272ed66049b449"],["/2021/把玩intel的开发服务器/index.html","12441b0dc35d6fe6f35fbfb0e2c18d22"],["/2021/搭建Teambition网盘的目录索引/index.html","29ec4ae59462e5739a55677938443298"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","c65a9e682d20966fb2b552f809ade49e"],["/2021/解决VSCode安装Go扩展报错/index.html","166f022e8551bcd6d477352c105f2940"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","47b792dde9dd612e56709ef956a726e0"],["/2021/记一次简单的水卡破解/index.html","e6b03e21ed2e7b41a64498d0c5885bde"],["/2021/高质量地从ico转为svg/index.html","0a4d51473dce1889c770b0dd58747546"],["/404.html","3c97284d679744a59e4396660e916e87"],["/about/index.html","22d724a24abd24c500cb2643734bab7c"],["/archives/2020/11/index.html","8490586a33402d5cd0737f3ac07b0edb"],["/archives/2020/index.html","ef723a4dce23b6ef3d2b2999622d1a58"],["/archives/2021/01/index.html","831a541fa74c66e645770fad23203893"],["/archives/2021/02/index.html","17d6c587bf42a461eddbdc28b9dd1786"],["/archives/2021/04/index.html","89c38cec77bb9d830e9d5dd089b4314a"],["/archives/2021/05/index.html","1ae15c692ca6e966dd11af4c78457da4"],["/archives/2021/06/index.html","3de931b2d5cc025596dea28c85a963f9"],["/archives/2021/07/index.html","c7740c97efef8c4897d2a4111b66a75c"],["/archives/2021/08/index.html","4cad514f1da6057a6484decf3e71c65d"],["/archives/2021/index.html","95f07d38939f3dd2ebf8d2073cb44ca7"],["/archives/index.html","38002c1896dfa34c62261b799f4d1222"],["/archives/page/2/index.html","91c6d3c3cc7786531d3ee95f731b73b8"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","89fbf93fa7b3f5e4a3a08feec50edaec"],["/friends/index.html","71db82eec366aa0ffcc0727aefe4d1ff"],["/htalk/index.html","355244d7ffbc8a75fe20510cece15c3c"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","98c4a9f90ad3d03f5b3a93e94ce2fb34"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","01622c06e458e21b85161e608d226004"],["/morecss/szgotop.css","38e07620362b3ac40d5b9be54d6c3416"],["/page/2/index.html","79b32054e4f6d7a600ddcdb317b0c556"],["/say/index.html","fc8b412989203633e66c3466cd4b93c8"],["/sw-register.js","babade4b08ff840c56ca2640726113d9"],["/tags/Clouddlare/index.html","23602e53f0966d12468e099ab82daf40"],["/tags/Go/index.html","69e302ffb35d088035e09b040e9267f1"],["/tags/Intel/index.html","4c0f2eb772ddbdd0084ab7668ebc54e1"],["/tags/MIUI/index.html","b12894586892979769e481be8cb91792"],["/tags/blog/index.html","002703c096b804f30b1203132840be00"],["/tags/free/index.html","e19b8173845d96998b14aa56b0c399c8"],["/tags/index.html","bad1b4133369e288f3853eb22c0ae85c"],["/tags/linux/index.html","f536acc610d79ccebc7e698840965eb2"],["/tags/oneindex/index.html","6412042cd9fa7b5edc94d6e656197ff8"],["/tags/web/index.html","9d8ea59bbd9ace9ebd2df9dfc1224505"],["/tags/甜糖/index.html","0c429ee61ae86afe501f678592d20499"],["/tags/网站/index.html","7e7b8fd9ea4e16d068de5e3d98f2df88"],["/tags/转换/index.html","161e1cb7c4e976242d86b3c52d832ff9"],["/tools/ghcdn/css.css","b7b4766ec7cd022e85fb4f1350b46d55"],["/tools/ghcdn/index.css","47167a2261d201ea91ce665b638e5cfa"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","a90d38be36587913da77e82ce7bdc6be"],["/wiki/Artalk/API/index.html","59dca057f0be8252ad63676a0ec0cedd"],["/wiki/Artalk/QandA/index.html","e57ce87b35d470a0922783866152451d"],["/wiki/Artalk/develop/index.html","1e3537853e609ad8bdd275407a71e164"],["/wiki/Artalk/index.html","5d4d9f1777d1a08ffa44f8cba2efba18"],["/wiki/Artalk/install-go/index.html","b184ba8502345fe5def8824ad2c50ea9"],["/wiki/Artalk/install/index.html","5d4346f0a677262f9ceac0038f6c178b"],["/wiki/Artalk/more-url/index.html","cc20d6825fdd0fd49ae67bf954e43a1d"],["/wiki/Artalk/play/index.html","bf7d4222363ddec3ab8f95b40f313664"],["/wiki/Artalk/use/index.html","f8bdd7474218e79a9597e44f4a4e4512"],["/wiki/index.html","004c1f1552d77b370402840ae336ce4d"],["/wiki/杂物间/camc.html","6b635f86cf093cdf1d0532116e07065b"],["/wiki/杂物间/index.html","e417a4c4ef64ba701efe0d682fde519b"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","d716b7c46e04316701668ceba7ab2c48"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","962923c86bc2af1a95cdfb08ac53c8c9"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","1181a883b3c787f8b20be32d2eee1e10"],["/wiki/杂物间/old-pages/index.html","5f5a3a07ad319f2504738d3e035992b7"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","a659f8a3c160c2e12f7b9930c6624eac"],["/wiki/杂物间/old-pages/定时关机.html","abbae8e1c5fad428e5463c2efab619f0"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","d270685211f7501813bb173acc293724"],["/wiki/杂物间/old-pages/杂物.html","a0d59c12546c242521a7a1ec1bb3d949"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","9fb6e259db6ad26f027c60dfe5cd0ae6"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","594c7c751eb3fa45559b17ef53d536fa"]];
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
