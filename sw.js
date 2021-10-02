/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","ed58b4267adf4fffb1ba76d143f58e0a"],["/2020/hexo更新pages出错应急方法/index.html","fba24829e87afb6f18d4573baf2c9fba"],["/2020/定时关机/index.html","8c5a62b2703d6a662d4b0a4a21e406e5"],["/2020/弹出C盘の快乐/index.html","3a64e42c82cf9b630fc7e68bfcb04c84"],["/2020/杂物/index.html","09a29311215a3661748468839ab13cd6"],["/2020/来在MC里玩电脑/index.html","eb9ca69efd88df22f6e29f27279562d3"],["/2020/现已通过myssl认证/index.html","b986a6307ddc7ec92cc797f174b3298d"],["/2020/用batocera搭建属于你的游戏天地/index.html","32c3e398e4386068440930a4e4b5d84f"],["/2021/GitHub打不开的临时方法/index.html","400bdbe8a4d31e4178d0c9c7f5fa250c"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","9d5fc89cd4cd6619847ddc798e4f15e4"],["/2021/为Stellar主题添加HPP说说功能/index.html","7e0ee8fef84025393a23bccb1b50ca52"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","4672586da3201b5c6dad01d1993e9ce7"],["/2021/免费游玩《戴森球计划》/index.html","06a97537f0e69d84ef1f045155e4509c"],["/2021/把玩intel的开发服务器/index.html","e75dbd0a4f0fc43f8684be56bbfb4ad8"],["/2021/搭建Teambition网盘的目录索引/index.html","87bed7869fd3f14644498c4aed8587b1"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","14ab368f2cd86b0b2410dd73c3498599"],["/2021/解决VSCode安装Go扩展报错/index.html","2ac81df0d0009f160ec4fde7106bb450"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","37f3b8ede0a2005c71b1ee1061051c71"],["/2021/记一次简单的水卡破解/index.html","17bbd0c72b4470d5ee7d0ed103a1ebe6"],["/2021/高质量地从ico转为svg/index.html","1e63db7f8418af74976e0677a4804c4f"],["/404.html","2cfa36c7611614720aa2d697c7002384"],["/about/index.html","3ef1ee23ad8c2478198e16024975c915"],["/archives/2020/01/index.html","e18deac39cd34648d2082694ed18646a"],["/archives/2020/08/index.html","cb54071f230764e7a1a5547a9b15f3b0"],["/archives/2020/10/index.html","9e6936f1223630bbc90a6443c6c1837c"],["/archives/2020/11/index.html","845eb56811b11914dc2e9d1db3aec5ad"],["/archives/2020/12/index.html","0a5cd261ee548b73baea0ab27d608c7b"],["/archives/2020/index.html","ec2b51ee65c9efca8c77752df39ebb22"],["/archives/2021/01/index.html","fa6ede1a981f86757b8a4a066f6a2e2c"],["/archives/2021/02/index.html","eb17a63cb89673a9c33e13ed108a1c9a"],["/archives/2021/04/index.html","50d3c9bdcc15ca1a33aa355bed71a5ae"],["/archives/2021/05/index.html","da705671448d16d568ac3723ba3297a3"],["/archives/2021/06/index.html","7a0370b8877699ae370e726435d16252"],["/archives/2021/07/index.html","f84b0e844dedb7e3bf5d1ad535f6c350"],["/archives/2021/08/index.html","baa36f098e1f2c9ad9c505d47ba5eba5"],["/archives/2021/index.html","f6f459c57ca8b186813c4edc47dd382e"],["/archives/2021/page/2/index.html","8654b57b30ba6f1d1a397149bc761228"],["/archives/index.html","036cbf285589a3ab5610e3a16b5456c9"],["/archives/page/2/index.html","1208ee586bc1828250fba8dcfa4a2827"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","3c97666b76ba2457f71c28444bf4155d"],["/friends/index.html","d0371327d6afcf8ad9fa749b5e59aa98"],["/htalk/index.html","0f028c08f22954b2c89b0dcd1d8058e8"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","d88c39730f197cbe96d8d062218fbeab"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","cd17e337c43d478073731b7ed70839f3"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","1cd3bd4015ae91519105e261cba0d3c3"],["/morecss/search.css","ca0aeee580aec463e7d0fa7b6d529844"],["/morecss/szgotop.css","283f1c39950122104607b62937c6b4c1"],["/page/2/index.html","fa825665d6a740eb57d4ba3374d579bc"],["/say/index.html","792d9a5eb6ab32ad5f4a8829bb017429"],["/sw-register.js","312e17e0bcccc46303af23e3f4dc7c8f"],["/tags/Clouddlare/index.html","fb702077ec7c2edffe69ab51e89b2d4e"],["/tags/Go/index.html","cc16dfbc1661d260d06594b10fa45591"],["/tags/Intel/index.html","74f414376fc7932bf434a2ff8b429ec7"],["/tags/MIUI/index.html","2592dc90fefd161c0d4dce0f75e01f59"],["/tags/Minecraft/index.html","6d5a5468d90af0869505e42aea7346de"],["/tags/blog/index.html","2a1b3a01f43126cb91dff347d14f3ecf"],["/tags/cmd命令/index.html","dfd45cb2e6e536c180c394ca41a774a6"],["/tags/free/index.html","c696811848303db194cf29e6ae8d59a1"],["/tags/github/index.html","955650b0975c98962f72e1a658414af9"],["/tags/index.html","49873f678c933479edf4c30d3737fc69"],["/tags/linux/index.html","5b5a5a1457286bf3964d4e25b5d67742"],["/tags/oneindex/index.html","3611a8db1c25cd97d83f17da30545b1d"],["/tags/ssl认证/index.html","88e1078a484129274ce9458d0424fc38"],["/tags/web/index.html","c49558803bbc2a7760e59d8b9c682954"],["/tags/甜糖/index.html","914865c94755d9d81009f9b127e160b5"],["/tags/网站/index.html","7096faa6beea8fa2d4ce176f7d68878d"],["/tags/转换/index.html","6516d3d515be7d6d96556f8289233399"],["/tools/ghcdn/css.css","7a150f313dd58fa8073343ebe2dd97f1"],["/tools/ghcdn/index.css","dd751a32a5d89e553fc3710165f714da"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","513e949cb465c5f1ef0cabf917c5af7b"],["/wiki/Artalk/API/index.html","e931f08f5e95398faeda31f9e0ab5a79"],["/wiki/Artalk/QandA/index.html","72f8a5c89d6f65d82fd04c5a0c12a143"],["/wiki/Artalk/about/index.html","0c54e03ea1a73a46f10ef978a2d65905"],["/wiki/Artalk/develop/index.html","8a3bceb9fdb64c54fd351940afd327ed"],["/wiki/Artalk/index.html","d11fcffc66a2487bb9f8e808474b5a3a"],["/wiki/Artalk/install-go/index.html","b1c6dea4119f7752cdd9af35a5fdce46"],["/wiki/Artalk/install/index.html","e2310cef3739256aacf2a8864fc7fba8"],["/wiki/Artalk/more-url/index.html","9b19dd088bbce110f4939b427cd8b096"],["/wiki/Artalk/play/index.html","3726adf46cc54f3b36f2cd8da21b4f7b"],["/wiki/Artalk/use/index.html","b99022be6c23b286aced9623083286b5"],["/wiki/index.html","21040dbf0319ea1dae61a7478d1e8bc5"],["/wiki/杂物间/camc.html","528b92080bed5eaa81c461de660daae2"],["/wiki/杂物间/index.html","2c645d58738aa505fc824524cd86f07a"]];
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
