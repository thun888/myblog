/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","16b512a6e5a66c7b48ffa9952950981b"],["/2020/hexo更新pages出错应急方法/index.html","5fed739644147c089a66b0e15eb05cba"],["/2020/定时关机/index.html","67502150ec59f0c399b15f4710a84121"],["/2020/弹出C盘の快乐/index.html","15a6f68ec9b28eae12305c33bc63c2ab"],["/2020/杂物/index.html","e3d957d274b3723fcec0d5882cecd6bc"],["/2020/来在MC里玩电脑/index.html","062e1d0e68555dc09f132b2f64f01838"],["/2020/现已通过myssl认证/index.html","0b0a5815480deab64d8344a4b983304a"],["/2020/用batocera搭建属于你的游戏天地/index.html","bf05d609d77ee917bcb119f05abf7237"],["/2021/GitHub打不开的临时方法/index.html","897fa4f17fd7a511b966e464468b7268"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","5806915c763c674e9fdb770ebf432023"],["/2021/为Stellar主题添加HPP说说功能/index.html","981751ec86faffa2accbaa8cd851d87f"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","e36c7defc8e5462f4735fb5384fb80d1"],["/2021/免费游玩《戴森球计划》/index.html","b1f05592150ca2855278778dced7dd91"],["/2021/把玩intel的开发服务器/index.html","ddb81f1141971d7d33abaaa27c6f7321"],["/2021/搭建Teambition网盘的目录索引/index.html","f94061a02dc8d2aacfa6bbd702d5404f"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","9708cce3d0361da2ed16d8c4f93ecbac"],["/2021/解决VSCode安装Go扩展报错/index.html","5eec7568d7814a3c1279cf30e4f7c2a9"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","624e074884f50a20b88e9fe863b380ff"],["/2021/记一次简单的水卡破解/index.html","dbb7944b829b0c1016392c61a8fe4932"],["/2021/高质量地从ico转为svg/index.html","5a903918a8862a70af3bf208732d8224"],["/404.html","08fa55ad82380185430c47848777beef"],["/about/index.html","4c47ef04e9026ca726582526bac7f99f"],["/archives/2020/01/index.html","bc8da7ddbc84106dcddc359db84459e0"],["/archives/2020/08/index.html","e96a6574735df5853c9cd65bd8051c58"],["/archives/2020/10/index.html","1e4efaf68e639c5cb30ea8ee2665148e"],["/archives/2020/11/index.html","5b4773334910c1d84fb6a4a8fc52ce67"],["/archives/2020/12/index.html","58961803814ba66de1f308a28a54a1ee"],["/archives/2020/index.html","e12afb64d48d8fd43404881bbbe32ab9"],["/archives/2021/01/index.html","3b72a253881a927b112bac4dcebd69b1"],["/archives/2021/02/index.html","04c9b292d7b56d322586bcfd9d29d0eb"],["/archives/2021/04/index.html","612902822919cb2cba6b094771b91542"],["/archives/2021/05/index.html","095099b3e71d5e43d9559bf9f6d45672"],["/archives/2021/06/index.html","7dcae5549f788a4aa56b2dbe71be489f"],["/archives/2021/07/index.html","6e172ee801d24d9db58462964770036d"],["/archives/2021/08/index.html","b54f2206599e66841fada24836693527"],["/archives/2021/index.html","e3963ebd778f8115db82d681ef8901e3"],["/archives/2021/page/2/index.html","e89e7b28efba1f73cdd0237b5c7e7fcf"],["/archives/index.html","df187e710753fbb57dfb66f003590624"],["/archives/page/2/index.html","842aa616c21d3c7f5d55f58721ccca31"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","fc7dc775b93d808b743da31d7aa322a0"],["/friends/index.html","54fe5e3fa5a496dea82280602732211e"],["/htalk/index.html","79a9b07680c5ef13d6bb91bed502655c"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","8d76a6b0a340f05963939dbbd1882c95"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","78a602953fc40f77c04693791ae25fe0"],["/morecss/search.css","226ae9a39d18ebf6028404413ea42715"],["/morecss/szgotop.css","bb3e858b54ff0273b24a83d070a9bc40"],["/page/2/index.html","8a467fd4b34a015773d7011915544d9f"],["/say/index.html","e4010967f51c5dc4bfc9882aad3aa2c5"],["/sw-register.js","c7ed136148acc5e08a12c854cdda1a9a"],["/tags/Clouddlare/index.html","e9a3b83ebdde04a5d06aac76bb0e3653"],["/tags/Go/index.html","b09bc9fa871ab3abc3c7ef9983b241e7"],["/tags/Intel/index.html","7cf512f9b6603cc7d040910c2d777c51"],["/tags/MIUI/index.html","1536d5884d07e12400e0bc50e5f5b62a"],["/tags/Minecraft/index.html","b70ffd036bb808f3481e66fdc1cf7ced"],["/tags/blog/index.html","7bd693a04f1a80fb261ab6123fe31ee2"],["/tags/cmd命令/index.html","7c748b538b3f73b8b31a8b1e83ca8a89"],["/tags/free/index.html","c6cc8110fad95af8230d3e7100e7dfa2"],["/tags/github/index.html","1ba8e996194068341322a7cd52547ab6"],["/tags/index.html","81fda8154731f76030ab19410f943d08"],["/tags/linux/index.html","bf66da5fb5cc501371718a12404edc10"],["/tags/oneindex/index.html","30bc5ac23a32ab29befe29a5b401abec"],["/tags/ssl认证/index.html","8cdea4b574d10737dab5e8a4227887dc"],["/tags/web/index.html","913e099bc53f10fa6c2a8ceb86d97134"],["/tags/甜糖/index.html","b90cfff3066f92d9c17e0270aeedd1d7"],["/tags/网站/index.html","5c605af294a155c5223ccaded6fc5cd6"],["/tags/转换/index.html","6e1b1fa8fbd321497fc51acf1587fc46"],["/tools/ghcdn/css.css","9205333c9a620442024e6547a1b48a09"],["/tools/ghcdn/index.css","d3d637ebddc67470c24f51388e1a5eaf"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","9a8b22f93d2169e6c17d558758578752"],["/wiki/Artalk/API/index.html","c45c4c8264be202dc42ee9c9dd24158e"],["/wiki/Artalk/QandA/index.html","a97ce8b1e0dc645f02ca0aa163a4ced3"],["/wiki/Artalk/about/index.html","d120bf2e6facb2d1145d10518da61187"],["/wiki/Artalk/develop/index.html","93e4ae91b6b979e0f051ebcc42b4e0a7"],["/wiki/Artalk/index.html","0cf12b4e1eede0371c888171d2219943"],["/wiki/Artalk/install-go/index.html","13a4c809780770104780f17a6dbfbcf9"],["/wiki/Artalk/install/index.html","6b03e831616d8994e604d1dbb7929d59"],["/wiki/Artalk/more-url/index.html","279256157a11a6a4e1820998149a6fd4"],["/wiki/Artalk/play/index.html","2331418ae0e0caf589d0c88127f03c4a"],["/wiki/Artalk/use/index.html","b91a779036f63806a2c75a0fc758e087"],["/wiki/index.html","be58f1ccb2f7a50a2c028eb1062923fd"],["/wiki/杂物间/camc.html","f7f7c3b4acc29537dd970e37dac88064"],["/wiki/杂物间/index.html","50b10de897ff4e5ea8f09c7e41c79e33"]];
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
