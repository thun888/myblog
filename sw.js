/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","24265c786263be369327d1d97d886735"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","12ecd4004c5ceac20a3046ec528b72fe"],["/2021/为Stellar主题添加HPP说说功能/index.html","afd1d0120c6b70619e7766df2962f627"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","4e7314897612a08aecb516db798e9d31"],["/2021/把玩intel的开发服务器/index.html","d3349749bb3bb413d577ac037e66377c"],["/2021/搭建Teambition网盘的目录索引/index.html","f8c3b17d130e06ac1409063dcf9f29c5"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","e959461d3cba4aa132866acfd9356f4a"],["/2021/解决VSCode安装Go扩展报错/index.html","ff0580e65dd1407eb11e67fd63820bc9"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","dbbd27dc7ed46a48af11c4a2d6c11e2a"],["/2021/记一次简单的水卡破解/index.html","5ec438fc45d92031bf551d6fda8342c3"],["/2021/高质量地从ico转为svg/index.html","0406901b4c3a8024d6940b2ec971d060"],["/404.html","4f8054fa0e6094bb59e903a051f15ecc"],["/about/index.html","1b39b36d1053722b937a67913eeb4950"],["/archives/2020/11/index.html","545892e7472f324bfe4e31fbfb6517f2"],["/archives/2020/index.html","c1d297a30c0019d8935dc86541414bd9"],["/archives/2021/01/index.html","81c2562db99b5eaecf73d222fae3dd23"],["/archives/2021/02/index.html","7ee4f6e7878e8d0160a280f73bcc122e"],["/archives/2021/04/index.html","afb7433bf677d8e6dc134ed7fc4c811e"],["/archives/2021/05/index.html","30facadef7c334903d755dcaa66dfb63"],["/archives/2021/06/index.html","d82408b3c2cb5adfd06fdbe5c5d318c5"],["/archives/2021/07/index.html","eae52123501b43b2b35122b8d411d53e"],["/archives/2021/08/index.html","fff74b3f7b5115e1371b2b1e0213fcb9"],["/archives/2021/index.html","1863c67549d834e9a4b421d5590135d7"],["/archives/index.html","3aba718bb16e1f0c37a05decd7ed2155"],["/archives/page/2/index.html","d6444e8dffea76dd3b3ad36c9246ffea"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","f2d2395c9d0676113f1039589bef012a"],["/friends/index.html","d79b7028dea88a27b6208d1ddec8f377"],["/htalk/index.html","f2c43c4cf7b403332bc263ab71667bbc"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","200f752005bbb43ed65121eefd3c7935"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","f7bc0d8fe1aa14a9223284d656efe445"],["/morecss/szgotop.css","0124e05a0fa8e89683fb3ca8a20343e8"],["/page/2/index.html","5e9fd890e465f6f993ba58736d8a3998"],["/say/index.html","719aa0293877ba8759197d6220a92f31"],["/sw-register.js","556fda08f8b909f5d3af203eaf1a72ba"],["/tags/Clouddlare/index.html","c758e622f7c41c4d38e28a9f853869df"],["/tags/Go/index.html","015c220102c71e8310f08087bce29a73"],["/tags/Intel/index.html","0f50f8ba4e50ade9372fce73dc68dee6"],["/tags/MIUI/index.html","0a2c8baa9dba01195abb186817d99d22"],["/tags/blog/index.html","4d718e31d3b93b27cf2c29535ba0aa65"],["/tags/free/index.html","a54565b959006b2d836d552e5ec7400b"],["/tags/index.html","dbff7aae1f25fa5d7df8373c78df4374"],["/tags/linux/index.html","06cb241bf2635b82e52f2662b73ad76f"],["/tags/oneindex/index.html","7254f2ee75111dbc266164262882b64b"],["/tags/web/index.html","295449eba9991ce1cd1a142054375317"],["/tags/甜糖/index.html","85dd21599d5e53a7a82518cdd4d86367"],["/tags/网站/index.html","43694277b4869fe3494e232d70ec9856"],["/tags/转换/index.html","6151805f70cb4d62d6e28d5d3af3b6d1"],["/tools/ghcdn/css.css","e6cdc4b172a4de623d00aca467bfc14b"],["/tools/ghcdn/index.css","1e6c675a488848229e92a2cea71a8bc3"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","79371be54cfc2bc75230b34c3f52ce24"],["/wiki/Artalk/API/index.html","066ef4b9cfaadbc7c9476b58a49cc435"],["/wiki/Artalk/QandA/index.html","20af54871439b8e57e8b90c0722b2b6a"],["/wiki/Artalk/develop/index.html","28f2acd70cdd37fd4938ba8c3727217d"],["/wiki/Artalk/index.html","d55eb3e2791a375ec11f4d4ff62468be"],["/wiki/Artalk/install-go/index.html","e90d4d0a62fa47190f95ba9b78635f35"],["/wiki/Artalk/install/index.html","9c0dfd952fe23f1b464fe5dd4f9365a9"],["/wiki/Artalk/more-url/index.html","723cfd3dad33f383ef8ad718f11192f6"],["/wiki/Artalk/play/index.html","0a872dd6df62e80ee8ff5d9e6f900690"],["/wiki/Artalk/use/index.html","b0a9061b871a61d079f8b3c3b6999017"],["/wiki/index.html","0b8b7f415582274fb471509ea7f79dd9"],["/wiki/杂物间/camc.html","9180a8e139b475651bebfc891aaafeaa"],["/wiki/杂物间/index.html","5434e6f456be14c8674cacc5815f3fcc"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","818a1b8b507a8f27bae207dbea6f14cf"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","d531cb9763abd1929d24e5710275a500"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","e1fd0e8580a56c68145c1a4194d59bee"],["/wiki/杂物间/old-pages/index.html","5b13619bcb9e9c5ee86d96bfa6526401"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","d81ddcc11ecf7b3caf14234f2b2396b9"],["/wiki/杂物间/old-pages/定时关机.html","fd92fa41b70d0ec6500755cfbce93d82"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","4456348c4cd22aa1ecc4a728b9673f58"],["/wiki/杂物间/old-pages/杂物.html","27032e8710151375905b1b18a5c97af2"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","6a32e8a8db0a500b03af5222c6eeb967"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","f5a679c7363623a8e3062d2ddc99899f"]];
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
