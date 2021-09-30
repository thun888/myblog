/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","76c1ecc8177732990a045a9187d90430"],["/2020/hexo更新pages出错应急方法/index.html","8df8af2e00ff34faccf137a5ccf36979"],["/2020/定时关机/index.html","01cf4f176cddf7c7992676d2595c8287"],["/2020/弹出C盘の快乐/index.html","75cdf369b5d59f60bfe99250ae413ec3"],["/2020/杂物/index.html","d907064f8dad2549af75447c358fa93b"],["/2020/来在MC里玩电脑/index.html","43a26a6e2a9a1f6d70a088f9fa398822"],["/2020/现已通过myssl认证/index.html","a71c06dc13eb394c04c3f0238799c456"],["/2020/用batocera搭建属于你的游戏天地/index.html","9297dec528468912fc51fddbe1cfcfeb"],["/2021/GitHub打不开的临时方法/index.html","91d5621649e5f162fa603f5f26645e5c"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","66f6e8f5eefbea1c5dc0f6b9684a1088"],["/2021/为Stellar主题添加HPP说说功能/index.html","9105d1c2f55aa2cf1424cdab3f6b8566"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","93bc116ab28f2de3a74b652caf8ea73f"],["/2021/免费游玩《戴森球计划》/index.html","78f2ad50ddfdcdc6ce287ceff1a0c4ea"],["/2021/把玩intel的开发服务器/index.html","111115301c7c97ede641e64edc55d7f7"],["/2021/搭建Teambition网盘的目录索引/index.html","362d1b8da2ad71a838f9ddd5e6bc35aa"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","30de2e99ab962751d360a1f82084c965"],["/2021/解决VSCode安装Go扩展报错/index.html","1d755b9ca0583b58d3197548628d6acd"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","c12f27c3a192d08e55a2ae7488468476"],["/2021/记一次简单的水卡破解/index.html","667fc1ebe4fb1019a192328ff291d5dd"],["/2021/高质量地从ico转为svg/index.html","d7d5eb38c753a7f07f15448b7205db14"],["/404.html","4f35a05d60347e1421bb81c3e1efe8f5"],["/about/index.html","2c98ec8c2d64263c6de7019761b18410"],["/archives/2020/01/index.html","d34ca06a1f60d90fc2821cc81bd9eae0"],["/archives/2020/08/index.html","57969d4a1a40151f743334d9ace1e495"],["/archives/2020/10/index.html","1cdee142158335bc231c6dd020bdd395"],["/archives/2020/11/index.html","86ed15367541e9a4c11a91ae5e80d39e"],["/archives/2020/12/index.html","7ec0535af8a077c3efc220ed0852b211"],["/archives/2020/index.html","f18ef053aaeb2e0bf8d209a9463e610c"],["/archives/2021/01/index.html","c9bf8a62c7fd0e174ccd897497797be0"],["/archives/2021/02/index.html","d562fd1a102f6531f45eab3042b4559d"],["/archives/2021/04/index.html","e617a0da97281727533b662140084a5e"],["/archives/2021/05/index.html","8bf37b820299fba369fdb6692c15525d"],["/archives/2021/06/index.html","19009014221bf756d3194fb13131ce67"],["/archives/2021/07/index.html","a2dcb04fea67c81b4256abe32dbe483e"],["/archives/2021/08/index.html","b24e5eb969489b7652b6e80237dd9b0a"],["/archives/2021/index.html","e5065cee41b6bc82772ca72c8f9b5363"],["/archives/2021/page/2/index.html","3eabf5eb8224b137e2ff8bc291829038"],["/archives/index.html","6b95a8ad77de86f5cf8d38831b7e00cf"],["/archives/page/2/index.html","588d6f7b0e5eaaf60be3934b701969e9"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","681a346ae2f462c25f12e44b57b72bd7"],["/friends/index.html","09e439a90d52999bd9c05c7ba131e633"],["/htalk/index.html","842640bbdfae7d6b36177f44fb7ec912"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","1692c3fcb9b4a1360b487add7bb44d32"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","724e13d53507cd2b97832dccaf7e89c3"],["/morecss/search.css","9162074fba53436bf18e9d8db871b6cc"],["/morecss/szgotop.css","a1929adfeb8f10016cadefb61e021646"],["/page/2/index.html","cef12dbee02089b2625d11b1d67499e7"],["/say/index.html","e5cbf9007b5cd45ad076b93e6dec0dfd"],["/sw-register.js","657e5fe3b04e9ddd88a1742e4922c82f"],["/tags/Clouddlare/index.html","99e6636e580ea6053fc2e1bd36a9d6b8"],["/tags/Go/index.html","a7b0f1535d93a3389642d25904445a44"],["/tags/Intel/index.html","c8e3c80fdd1cb414f8d99f2f91cee54e"],["/tags/MIUI/index.html","eb4b9b4b0ebb211cf9157a7d4bdc1e4e"],["/tags/Minecraft/index.html","92b1b89b592fca9a12b889e67c480da4"],["/tags/blog/index.html","c708cd033d39afd392e4069fb5270709"],["/tags/cmd命令/index.html","fd73d54e9002ecdefb489fad7cac6e72"],["/tags/free/index.html","906b68e044dd91bb21ec2b765c96b4f6"],["/tags/github/index.html","4bbcfa08e377af3c00641c13963644fa"],["/tags/index.html","a70a39285863d28cad64ada27bbd3edc"],["/tags/linux/index.html","7de8960b3da0efe0e336ce1c7aa937dd"],["/tags/oneindex/index.html","17d010742582346ebdc9b7d0f0444841"],["/tags/ssl认证/index.html","8a3f5e047fbe1cb31c66b8a3738e4c85"],["/tags/web/index.html","21fa4dcab947ee7dfaadc473600350c8"],["/tags/甜糖/index.html","1d53c865bd192e52cb70018efce7153c"],["/tags/网站/index.html","821b9cb43404d5ac0a15c0f3516a723c"],["/tags/转换/index.html","a27bc645054b2ebdd6c1098940bd869e"],["/tools/ghcdn/css.css","9aa8a5d8212f64d8cebb7acd8a172bbe"],["/tools/ghcdn/index.css","1dc2a226cfea2ed1fc778af6f8c005ad"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","fd888d9c0c0c6c09530b055f403735fc"],["/wiki/Artalk/API/index.html","348c1b88d869238f22fbde1b9f5dceef"],["/wiki/Artalk/QandA/index.html","e15284277c812283c9b9269db605c100"],["/wiki/Artalk/about/index.html","1213ccbf50634231908e1397298cac95"],["/wiki/Artalk/develop/index.html","970db948b52934efb10609a9a8f9cd63"],["/wiki/Artalk/index.html","f1f50ee5077cb70e8ba010d9a6bb6aa7"],["/wiki/Artalk/install-go/index.html","060e78568b9d0d2888092ea6883dd5b4"],["/wiki/Artalk/install/index.html","8dc6c427db80d90c604adfc1f12affec"],["/wiki/Artalk/more-url/index.html","cefbe77346214a6c166d9e259e3db2fc"],["/wiki/Artalk/play/index.html","da924a4e9780552a2971286e4bd0191c"],["/wiki/Artalk/use/index.html","369c775be684c613739d9ea6252585c2"],["/wiki/index.html","a4657bf29176afcfc021a1d461cdac89"],["/wiki/杂物间/camc.html","fa137acefa45465a67a49b23659d7f2a"],["/wiki/杂物间/index.html","b5d158779b35593448fa085e924709dd"]];
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
