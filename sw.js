/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","0ec9d976716490af6453281868d47e26"],["/2020/hexo更新pages出错应急方法/index.html","f0079175c45e2bf64b220aba8373faed"],["/2020/定时关机/index.html","e69554ce08ebdfb927888c487a6cfb83"],["/2020/弹出C盘の快乐/index.html","a77fb47353ae87308bfa5ad82b307e73"],["/2020/杂物/index.html","78f90fd154452d0a1e26b9761b311d55"],["/2020/来在MC里玩电脑/index.html","f22df6d76c2a7e6efb952e5f4a0adaf7"],["/2020/现已通过myssl认证/index.html","88c1ef8e1c94ce82f60a616bc66e1455"],["/2020/用batocera搭建属于你的游戏天地/index.html","29e7a49317aa2f764f53ccaa67360174"],["/2021/GitHub打不开的临时方法/index.html","d88451ab6e9d886a7f6bfbd81fe8cfd6"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","6c19caebc0236b34f6cb72bd2a98a000"],["/2021/为Stellar主题添加HPP说说功能/index.html","fc18510f0cb6c198716dcd29073360aa"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","d1bb2e8169b4b820a12ac0108a55f778"],["/2021/免费游玩《戴森球计划》/index.html","1b7f884421bf818beb6daafe6de74f4d"],["/2021/把玩intel的开发服务器/index.html","e7dd88bc870aa7e9bcb2299b33bffa01"],["/2021/搭建Teambition网盘的目录索引/index.html","ba69a6b6ea832d6db19bc34042ceaa7a"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","5ea375f980ea467c19c36c0c8a4ae3f9"],["/2021/解决VSCode安装Go扩展报错/index.html","e96da54caf036372d5dcd2fb5f32a4a9"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","4f73bc4ba54de6e01447c7a5d7ab6b50"],["/2021/记一次简单的水卡破解/index.html","39307d7c4d2682b2650b423c72d7e46c"],["/2021/高质量地从ico转为svg/index.html","f0f99aba15a44b40b816bd25d9e47d0b"],["/404.html","d4b7c8b4c58600227ba1bb57c8da21ee"],["/about/index.html","36a89d8bd5e300cc99137298ea338c65"],["/archives/2020/01/index.html","5a1b5d2ee4abdd417f913655076d7464"],["/archives/2020/08/index.html","6ccd0085dd7170820e47322f28c6f8d8"],["/archives/2020/10/index.html","90733856e1fd0a21a91badee837994c1"],["/archives/2020/11/index.html","2586bd39e5f191ed87c524ea63d1d507"],["/archives/2020/12/index.html","c4a581c6e63d227048a3737dcb0ad86a"],["/archives/2020/index.html","82320121a6eff99f3ac026b8ca5ceda5"],["/archives/2021/01/index.html","9cab402ea1fba749d04038fc55212292"],["/archives/2021/02/index.html","53de9434ee7187d2c24caf0b15810e85"],["/archives/2021/04/index.html","a455e6431f714dfa0ca46153db7c0a18"],["/archives/2021/05/index.html","9b4d2db0ebb81115151452da6f3b1fdf"],["/archives/2021/06/index.html","5f30f9c919159189d241031e5b97e1ce"],["/archives/2021/07/index.html","a560be183b83dbfa12208df83fdbba81"],["/archives/2021/08/index.html","5e611fb9a85d52d49a27f5d0866f0d16"],["/archives/2021/index.html","4a41771da1b57cfee8d42ba5b1b62ecc"],["/archives/2021/page/2/index.html","277eb8a1e85e6a9079b16cbf6847de5c"],["/archives/index.html","c60efc9f19cea9c1692a233790991617"],["/archives/page/2/index.html","74f7e6c472761894ef66039625647a56"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","3981306bf95805d39d4eeb9dfe71729c"],["/friends/index.html","1bb1f4baa6894677337d35a306ed6eae"],["/htalk/index.html","8988e5f9be7b802789fe7ee730d975ee"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","873986552e6ab534835c6fe8564a72b6"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","1f701750ac71bd98039a8ed876ce10a2"],["/morecss/search.css","0c98aa2058a28c49ea5541be891cdb58"],["/morecss/szgotop.css","d5abece565ff9a93d89e10e27d8098de"],["/page/2/index.html","44b6f79436792d4b9b9bedfcd85c36f4"],["/say/index.html","8786b52230622214e034fa00b23618a8"],["/sw-register.js","9faf51f4704f45a2737abf52b8726678"],["/tags/Clouddlare/index.html","c5cc6e9090885e24c1765378f9c31774"],["/tags/Go/index.html","46679d5333f141d1c4bb44c24c25e749"],["/tags/Intel/index.html","7559841f1c4c36cb6a9485211ae71d88"],["/tags/MIUI/index.html","cebfc54ad94a870dcef54d820ed069af"],["/tags/Minecraft/index.html","599311530a4c1bec2dce5f6fb698a75d"],["/tags/blog/index.html","8b17502e60b40490568fa2cfdaf3e32c"],["/tags/cmd命令/index.html","80ecedfbb93c3caf1536352e6ddd765a"],["/tags/free/index.html","a395d05c7b13743090b1b7751964715a"],["/tags/github/index.html","a0fcb1d312b750cc8ae8e6ec711d7a15"],["/tags/index.html","37b772cf0996ef5197a12d91f1a912dd"],["/tags/linux/index.html","914283f07a8090fa2bfd68f1b4856136"],["/tags/oneindex/index.html","21bd3e6b004b6a1f69375d77e9ee258b"],["/tags/ssl认证/index.html","d98b412f329fe8c168850ae221dfe7cc"],["/tags/web/index.html","23f1f256b860e69d8da3313d5c21da25"],["/tags/甜糖/index.html","c6b3585192ef26d5de3d0780abb44fd9"],["/tags/网站/index.html","6b865d059e3919bf5395842698ad4ec0"],["/tags/转换/index.html","7c7337ec5e186710fac589aa3284e269"],["/tools/ghcdn/css.css","21ae4089900127b7dfb4bb806829b947"],["/tools/ghcdn/index.css","9b6ebcf950d9f8d16ac65dae1492ceff"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","1cfa64d753fd3acd6e0b8a59475fb34d"],["/wiki/Artalk/API/index.html","562c0738c6bb7279e075955329b65936"],["/wiki/Artalk/QandA/index.html","dc8fe30fd6b92953ac2a6ec5199473ca"],["/wiki/Artalk/about/index.html","03bf36da0ae1d2be96fd5ab2a4d0b34b"],["/wiki/Artalk/develop/index.html","29733c4b2481973b4e6e6db7046632e7"],["/wiki/Artalk/index.html","44270954141d640dc6ec713ad203d6a9"],["/wiki/Artalk/install-go/index.html","877e224e3d3111d8426233df2f126a31"],["/wiki/Artalk/install/index.html","ba7339981888e6c8026af473dccbc96a"],["/wiki/Artalk/more-url/index.html","a6d882b670b77755122784d3c1441c0f"],["/wiki/Artalk/play/index.html","77365cfbaf7f4c9587371ac76a8a93bd"],["/wiki/Artalk/use/index.html","c1737fafac8edcd98e9e96ab2172f058"],["/wiki/index.html","be38b110690596b015f24e4a6522f5f6"],["/wiki/杂物间/camc.html","20a2b9906b0188a1f6fd58edf49e03a3"],["/wiki/杂物间/index.html","32bc459dd1e9df6705722d665bd61c27"]];
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
