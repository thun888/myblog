/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","76f5a1f87a0c051280edc327b01e9744"],["/2020/hexo更新pages出错应急方法/index.html","29b28f183f52c61ece16f1f76ecce01f"],["/2020/定时关机/index.html","741ae60fc77ad05aed8b7aaecec23c52"],["/2020/弹出C盘の快乐/index.html","39a9b57ba767f276bea705855a4ca49b"],["/2020/杂物/index.html","d84701055f3eec8b7f988ccf1a28d3a0"],["/2020/来在MC里玩电脑/index.html","bfa0d4eefd5c0559b645c3dbc4284559"],["/2020/现已通过myssl认证/index.html","07a260d85b06268649b88f466a156674"],["/2020/用batocera搭建属于你的游戏天地/index.html","52570f49da97d53e242b813546b2d9e3"],["/2021/GitHub打不开的临时方法/index.html","b8cab4133db45471e3a7250f3efa4fab"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","d120abeae3ea3fdfa3405f7f9c0041af"],["/2021/为Stellar主题添加HPP说说功能/index.html","944c0b5b2d821d5fe709bcca195475fa"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","e2fd9db5511f6222c8fce0b51df2e774"],["/2021/免费游玩《戴森球计划》/index.html","9e4da0a1f92c9c02c6c17bbcb0b73319"],["/2021/把玩intel的开发服务器/index.html","dc7dbefac717b44c1ef070015ddf7c47"],["/2021/搭建Teambition网盘的目录索引/index.html","f2f249287bb7a0324fc33e6d3af2ae01"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","6dc1ba4354605698281632c347c3fcc8"],["/2021/解决VSCode安装Go扩展报错/index.html","07fa64c7d36cbf7cada82bdc7c8dffdf"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","cb5310138f3c665f7dcf952e209f0241"],["/2021/记一次简单的水卡破解/index.html","4badf481c069554b918331ab864b1f0a"],["/2021/高质量地从ico转为svg/index.html","1adb57d762eb3521f95375aab294ee27"],["/404.html","7523cc64a1824e370185b25ca683b29f"],["/about/index.html","e62c03b8fc913422501791eac307b8f6"],["/archives/2020/01/index.html","bfb2ecbda400928d973dd5dad44c49da"],["/archives/2020/08/index.html","7af20d595ec1e51d364011d23bf5ce76"],["/archives/2020/10/index.html","90a3454e27cb9e57bc1d05105471abae"],["/archives/2020/11/index.html","1d9254dbea293122a33a2ec42fefff20"],["/archives/2020/12/index.html","2da8c3a520cc49a4098642fc44ee3446"],["/archives/2020/index.html","5fc47a3d70313622ec76c874e1e49fb3"],["/archives/2021/01/index.html","f50ea02863622e4a5011660026d71440"],["/archives/2021/02/index.html","92b41c1810fda943ac690fdbccc8713e"],["/archives/2021/04/index.html","d4d5912e478b2d4b47ffc7a602f52dc5"],["/archives/2021/05/index.html","ea6037ab6bbcdd8ab20ce5b77d45570f"],["/archives/2021/06/index.html","f7101dfdb2a7a1c43e61f61fd047322a"],["/archives/2021/07/index.html","2f3e613e761c69897210ce48e6227b35"],["/archives/2021/08/index.html","da162246a25a875baae410920259fd11"],["/archives/2021/index.html","d8da7c0436663f2eea20a47c6514ce5e"],["/archives/2021/page/2/index.html","9cb4de522162bac581c197d60794850e"],["/archives/index.html","3f0f6a2aacc82b62cbe782377f8769e8"],["/archives/page/2/index.html","b3a30abb235ae878310d0103711f97a8"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","bbb8dd262061baadb0f5d569f0630224"],["/friends/index.html","57a6ff0f77b8ac99e0a62c31bc874ea8"],["/htalk/index.html","81288c172b1c2deeb05e1be6364cc180"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","fa5550260568353f11a8b8c5930b0e83"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","cd17e337c43d478073731b7ed70839f3"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","e00e6c62d1d384e222bfbef524b6ca9f"],["/morecss/search.css","a3e239121d99ce4873f21bef41ecbc87"],["/morecss/szgotop.css","9b8a23bebd08ed4b79ebe4771af3783f"],["/page/2/index.html","0cf480f026a4cf3ea3961b7e7e088aca"],["/say/index.html","0cf4c67532ba52009b5eb983ac7a9d76"],["/sw-register.js","cf0999290cd8a9bffe66286a9e0c486c"],["/tags/Clouddlare/index.html","037fc57d7e42adaf7d6c50a832cc02d8"],["/tags/Go/index.html","85dc1e1c23a3ad93c6314201530459c4"],["/tags/Intel/index.html","6502a579ba9f6404c0bd2010bcc40faf"],["/tags/MIUI/index.html","cd9d2602664a4aa68c1c32d7af486bd1"],["/tags/Minecraft/index.html","ebbb1e7a2c63b28f9ffeeae9721414dc"],["/tags/blog/index.html","8408c96f299e4d9d33facdf03a27efa4"],["/tags/cmd命令/index.html","42ecf2aaabba389543d78f686a43b8bd"],["/tags/free/index.html","a4b248970e47d4b322967e61ed45a9e5"],["/tags/github/index.html","21d4ba60ccef7a426a20d211e536c711"],["/tags/index.html","056139999d3c347f9c517853cd352086"],["/tags/linux/index.html","834f9b33fa032026d98cfc0d1dc3637e"],["/tags/oneindex/index.html","21952b9712749c6c0177d5a8e8c9b322"],["/tags/ssl认证/index.html","8ebf922fb8dcc68b5719f5b1e70587f9"],["/tags/web/index.html","585e406e4ad58759c3e6e82a946e8487"],["/tags/甜糖/index.html","adb43a6eca165d701319efd62052196d"],["/tags/网站/index.html","fbcae8c3f0187ffa492c758ece45961a"],["/tags/转换/index.html","3a2f7ea558017271da0fbf45e0136fc7"],["/tools/ghcdn/css.css","c67fc0d6fa0ee57dfe4d0a5a5056c3ff"],["/tools/ghcdn/index.css","198615a70c819078fe780bed67aa8f9c"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","a5007e21b020922534d8b71c2f66a236"],["/wiki/Artalk/API/index.html","541a1c62565196affec30a7596f0b76c"],["/wiki/Artalk/QandA/index.html","5e1570a5b0ace51dc3e4f64abbf0de5e"],["/wiki/Artalk/about/index.html","fb2255e2e1d967f99aa21ecd56134797"],["/wiki/Artalk/develop/index.html","e698c3f96b25fdc0f0f0aa9563f607f7"],["/wiki/Artalk/index.html","d68556411ec04b87919a9f9e4a1e58bd"],["/wiki/Artalk/install-go/index.html","889ad5eb5d9c3e3149a0d926ee459842"],["/wiki/Artalk/install/index.html","70b4cb50459c8e477f183308085c0f53"],["/wiki/Artalk/more-url/index.html","a24536630ea4327d0d7efbe4176dd474"],["/wiki/Artalk/play/index.html","27dfa435ad4e65d93cfd071373d25575"],["/wiki/Artalk/use/index.html","4f5db0c8673666b5f5f05a062ab56313"],["/wiki/index.html","dffae53369b27553a555fd9780c32064"],["/wiki/杂物间/camc.html","16de0ec317307593bbedc4c5101a6d35"],["/wiki/杂物间/index.html","27f50a6b6515f78873dc7f21a5273b6e"]];
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
