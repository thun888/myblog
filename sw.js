/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","aa9757c71c97904ac5c7149baeef2ecf"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","3752da4af2e3ba82e97091ea05c56db8"],["/2021/为Stellar主题添加HPP说说功能/index.html","2477f565bcd95658c7d8b86f3e13c5bd"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","98ed98f2295a2f6c0033940dc4026752"],["/2021/把玩intel的开发服务器/index.html","42d8d502a94093831eecc9331e8c9f28"],["/2021/搭建Teambition网盘的目录索引/index.html","749e18c8b88f31d69ffe088c5ba5a2a1"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","f89e604f87f29934270cc177c3fa13aa"],["/2021/解决VSCode安装Go扩展报错/index.html","fc292cfab34e74885237fee94303864e"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","ef0703e6739775f9a8bc904f4e230f5f"],["/2021/高质量地从ico转为svg/index.html","3563f89829498e0336618c23161be5cd"],["/2022/2021旧年总结/index.html","8e1a32939226370a8d8b0d43b83a6f88"],["/2022/Easier-Control-of-Recognition-Conferences-AHK/index.html","e4c2a0ffbf5060423ddf54eb3c1b28c5"],["/2022/definite-clause-point-review/index.html","7f3b24c0bbbd25398cbc03f1ae1934b6"],["/2022/ptyhon-with-altium-designer/index.html","1ad37023887c7dbad7f90354a6947525"],["/2023/auto-control-power-plan/index.html","a044ef30275b32d1cf56bbea5dac1251"],["/2023/howtorunmrui/index.html","53731d0fcf7e6d9705cb244e6fa73cfe"],["/2023/photoononedrive/index.html","5e1f858ad4a5194de68cf7cc5c23d864"],["/404.html","428f0f80866eb40646be08142ea2c4a2"],["/about/index.html","d0281338e21644a90d7083a0e6eac211"],["/archives/2020/11/index.html","5fa8024c36fb1048c100ba60769b65cc"],["/archives/2020/index.html","b82f903dfecd665ac6c8a5addd286041"],["/archives/2021/01/index.html","a98fab1326136db7abb11260231653a3"],["/archives/2021/02/index.html","f67112ab4b9c0a454acd7f7e62cde2ee"],["/archives/2021/04/index.html","975d6d2235e2729837db27bddd725fe9"],["/archives/2021/05/index.html","b3bd325709848cf54fa5187af033f515"],["/archives/2021/06/index.html","46f1a6ebe06168b5b5ebdde444201c50"],["/archives/2021/07/index.html","f012cec1e5ba0dbf026d3d21361a4589"],["/archives/2021/08/index.html","a9df5967048cadab1d0cda60ad9ffeec"],["/archives/2021/index.html","cd19b07aec60b280a14cb681b5956235"],["/archives/2022/01/index.html","721a58072b153328f476178ecc55b1fb"],["/archives/2022/07/index.html","799b39b65e7becd8a29573a7240fcb87"],["/archives/2022/12/index.html","3e1a629f51f235fea7897e3372aa3571"],["/archives/2022/index.html","ac49b272bf8fecb4d513f1fddd6e8ea4"],["/archives/2023/01/index.html","f3742556c05d15161d0de2bafccaa3d7"],["/archives/2023/07/index.html","8b85f6d2ef854a71dccf531030bf66f2"],["/archives/2023/08/index.html","713479f80bc523611855dd1ef0cd1f47"],["/archives/2023/index.html","6b92c6040cd5e221981d55e4479e4e29"],["/archives/index.html","85b7357b7c72458a3a83c52feee17ead"],["/archives/page/2/index.html","912fcae1d5c88c4bac670ba2cd3d81ab"],["/big/index.html","4596af5bc5bd2625b539beaee11b96cc"],["/css/main.css","3135f38583a5c2ad56e704b65c4d8683"],["/friends/index.html","66b0ec99c60a582eea16140e1dbac4d7"],["/img/dynmap_markers/anchor.png","8882b88cb02ec006375fdbd51ba8db34"],["/img/dynmap_markers/bank.png","3969d578f5221797274864508e55b748"],["/img/dynmap_markers/basket.png","18ac5453fea98f5acc65ccf22eee3f29"],["/img/dynmap_markers/bed.png","adcd141c7588912556ac95b9c2050e3e"],["/img/dynmap_markers/beer.png","62f1e47307b70672827d02f87a6fcb88"],["/img/dynmap_markers/bighouse.png","f8c894a70b562c2b9e1e75f3faa4e986"],["/img/dynmap_markers/blueflag.png","b1e4ccc3e6e6c0f4c2d41f7a330bb560"],["/img/dynmap_markers/bomb.png","4728262b5c708c32f1cc2c493fb4e053"],["/img/dynmap_markers/bookshelf.png","720fee5fbce21b239b94f5b6105c67e0"],["/img/dynmap_markers/bricks.png","62ca10dad9b8e8bb68c6735721dc8355"],["/img/dynmap_markers/bronzemedal.png","ace0bad4b0383c0cfa4f7631867593cb"],["/img/dynmap_markers/bronzestar.png","041a08456b276b4ea0d8ed4c00edd615"],["/img/dynmap_markers/building.png","fa1f1296f0f6d6e4b5064f78314522e7"],["/img/dynmap_markers/cake.png","c29fb7cfff7768fdddf1da2df45253cb"],["/img/dynmap_markers/camera.png","dcdf5e3c2d0a51745fface4e16f8e5e9"],["/img/dynmap_markers/cart.png","783d19cc53aa81bbe38af93c4b429b5e"],["/img/dynmap_markers/caution.png","1af8a1041016f67669c5fd22dc88c82e"],["/img/dynmap_markers/chest.png","e69be0cf1489ce59c1e9742a7c3298eb"],["/img/dynmap_markers/church.png","dd2fc2daed44ae76ac5def90ed995850"],["/img/dynmap_markers/coins.png","dcd59caab29b2276cb60641409059800"],["/img/dynmap_markers/comment.png","c76000e40b0374b08970d29837528c9f"],["/img/dynmap_markers/compass.png","0eae88c326156b95344c305b8bf9c29e"],["/img/dynmap_markers/construction.png","8add5616b70bd307701b341b6065599a"],["/img/dynmap_markers/cross.png","446112982e2784e1643b2e53ee841433"],["/img/dynmap_markers/cup.png","bac82b8507c48972b0d60262296195a0"],["/img/dynmap_markers/cutlery.png","a2ba5bc696c68cd7184ef31d6548a2a8"],["/img/dynmap_markers/default.png","2693a0dcfacb6a699802b07087142445"],["/img/dynmap_markers/diamond.png","babe0f29c46b7134b96264b977bf87e6"],["/img/dynmap_markers/dog.png","f7174dd4282924a4c28cdeeb219d5248"],["/img/dynmap_markers/door.png","47116a8dd2e68bb5d1e86b7a6d8efd7e"],["/img/dynmap_markers/down.png","a5e50f2a2deb49cfecb6a2ea1966701d"],["/img/dynmap_markers/drink.png","13fc0628e521828a7b9aa238537f2865"],["/img/dynmap_markers/exclamation.png","13a319c2c5e163aa87a58d7fb7716cbe"],["/img/dynmap_markers/factory.png","40003b3d656275c167351f4d2d4e2fcd"],["/img/dynmap_markers/fire.png","31d25a5703db629ee6bef6fcba8a240c"],["/img/dynmap_markers/flower.png","e8324ea65ccb5c88ec7aa490e0eac2a3"],["/img/dynmap_markers/gear.png","3d04274979a97bdbeb73e7efbfafa919"],["/img/dynmap_markers/goldmedal.png","c4942690b68292788391b1fdf427a7a9"],["/img/dynmap_markers/goldstar.png","b6a8ed03cc930345eeb77186ed0f82d9"],["/img/dynmap_markers/greenflag.png","59e33d56d899c8eae3771f1ab9fc464e"],["/img/dynmap_markers/hammer.png","0d2b5dd861b03aa260c9c3bc87054ff6"],["/img/dynmap_markers/heart.png","c8a8b3ef583352766e85aab0b14833bc"],["/img/dynmap_markers/house.png","d4f49daa35bb64e0bb4068ffe06d2b3e"],["/img/dynmap_markers/key.png","8bc3a52cc5599956be252fdcbee6dad2"],["/img/dynmap_markers/king.png","8532d2ed783be0c2c41c12fe8178b611"],["/img/dynmap_markers/left.png","ec870788cc2d381122a2accbeb748f3a"],["/img/dynmap_markers/lightbulb.png","446fb6c74ea485d216bb96afbaab31e0"],["/img/dynmap_markers/lighthouse.png","ff36185da0951159dd7de6ccd06f3d9f"],["/img/dynmap_markers/lock.png","d70d04b37b972607db6ad1ec785be145"],["/img/dynmap_markers/minecart.png","d9afc1f85303333c58a27c2426914367"],["/img/dynmap_markers/offlineuser.png","21515090de5554c631429ead0f79f87d"],["/img/dynmap_markers/orangeflag.png","d2ff8484843befed8f591eec8e49b7eb"],["/img/dynmap_markers/pin.png","2832bd5bcc0925909e2f60e00d706bc0"],["/img/dynmap_markers/pinkflag.png","fd2f6390270548dd97ecea71eb040c54"],["/img/dynmap_markers/pirateflag.png","61bbdef42a7c7eba6bf1cf199dff19c2"],["/img/dynmap_markers/pointdown.png","bfc6ffc4119f6dd665044d2bf710a5d2"],["/img/dynmap_markers/pointleft.png","d974f547fb231400687f921ea522faf4"],["/img/dynmap_markers/pointright.png","d7239b952fb0c6831e1b8e900a527a29"],["/img/dynmap_markers/pointup.png","e5970a256c68aa64709bd51db5c23f12"],["/img/dynmap_markers/portal.png","7e1a2d75e5c6c206941a52faa09c5aa3"],["/img/dynmap_markers/purpleflag.png","6cffb4f0213183cb6384856dc759dece"],["/img/dynmap_markers/queen.png","cd3e965ba08c23a5aa1b19c879519011"],["/img/dynmap_markers/redflag.png","339568d29bc329a72577ac19e42c155a"],["/img/dynmap_markers/right.png","2418ed4401b661239cd4dc6ad3430e87"],["/img/dynmap_markers/ruby.png","80565ae03b57b269e8f060ff291c8e13"],["/img/dynmap_markers/scales.png","01f6c5c6ee920083e7ceb579ba909d7e"],["/img/dynmap_markers/shield.png","477758d4c5f5d3ef6f5c3c16aca9a3b7"],["/img/dynmap_markers/sign.png","66ff41396b0172ac05de01c0eabfcc01"],["/img/dynmap_markers/silvermedal.png","01f805b0c7e8b808701fdf9b5ca6ce1c"],["/img/dynmap_markers/silverstar.png","25b2996475ee18863214862c840e6d31"],["/img/dynmap_markers/skull.png","1dc0347492832480f708049519fa18a8"],["/img/dynmap_markers/star.png","25c2d343a231c86779abc9901764524c"],["/img/dynmap_markers/sun.png","e70ff308678476252fb3654ffde4bf99"],["/img/dynmap_markers/temple.png","e3f88049f7b09c9ef0700191ee496584"],["/img/dynmap_markers/theater.png","44dec85d1f88d7f00fc51b3e4b26c6fc"],["/img/dynmap_markers/tornado.png","adbb0f1b34c6956d81b0d6b83a536b30"],["/img/dynmap_markers/tower.png","e2433a145b7071efc45f408890d4dd8d"],["/img/dynmap_markers/tree.png","3a062c79544dd8fe40b3259915dd16ae"],["/img/dynmap_markers/truck.png","47815e1e4d47a2d9623e65c23eace9e8"],["/img/dynmap_markers/up.png","5cce80d0844dadbf47349c0efccfe69e"],["/img/dynmap_markers/walk.png","d7881686942fe90224ade126121177ac"],["/img/dynmap_markers/warning.png","92cac89bdf2388db33c719fefe608449"],["/img/dynmap_markers/world.png","d0d0b0fd600ffaab7d4051de42df81b9"],["/img/dynmap_markers/wrench.png","da4053b4dd7f25ab2f0fc2efd1ed871a"],["/img/dynmap_markers/yellowflag.png","8d7a692d0f7f19745301f17973e41fd3"],["/img/icons/08a41b181ce68.svg","91a42942dd98b240920b5411bb4695c0"],["/img/icons/20210610162918.svg","4e2ed73532d0ada5a8e864974425b055"],["/img/icons/25678f144c438.svg","078f457c65f878f8e3ef8f2c4196fe45"],["/img/icons/a1b00e20f425d.svg","b9c2eb08e4d8dcac32d5d779833f4cfb"],["/img/icons/nxfhj.svg","664a60dedd5918b9c24a231d07e2b74e"],["/img/icons/s54vgdz54.svg","e529898ff4ebb49fab20d1a1e3230553"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/post/54gdf56g4f653g.jpg","aecae2d0de2e216605850e007220a02b"],["/img/post/5b73a4a33f9bb3df5e1236b4021492fe.gif","62676e86819b6ecb0e4525648c33774c"],["/img/post/7392db97e9d8cea0eb0a6a60656695b5.png","f40038264104c08f361356c4e7bd4395"],["/img/post/e6905593f50890da134d5cf2e7ad1541.png","b9858a7567c562d52aa0206454ad6b4a"],["/img/satus.png","ff86c9ae670ad5873cb23f0eb26292f9"],["/img/svg/2659360.svg","bf2e354d35d263fef6bff8313cf142df"],["/img/svg/3442075.svg","0d6fcc5b4f02ff302de134738af23876"],["/img/svg/76b86c0226ffd.svg","498b39b974f025547562cec3792f56be"],["/img/svg/8f277b4ee0ecd.svg","3cbf4b2c668d0475d7e085e72f33116c"],["/img/travellings.gif","d5918e94977b1006168e781bc9a42dce"],["/index.html","3ee52d30f8f59b4c22b8578b2cef526e"],["/js/main.js","4d881b78471c8f5f3221e0898d73b104"],["/js/notyf.min.js","f02a629c438de1b443ce9ec8204c523b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","ecaef142d8885d6f2000fb5ab2fcb4ac"],["/js/plugins/friends.js","694a0dd2224533435c322ad2fa9f1196"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","95f32a415e427b324e4e8a092451cf3d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","83523abad10412346db815bfec63316b"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/mcss/mcss.css","2439b0937a81555cc76d7bb0a83de880"],["/page/2/index.html","7330fb63ba5c8404c497f8f49b6aa988"],["/say/index.html","4d317c88d4ac4c55c0d882baf6e3af97"],["/sw-register.js","2fd84e1be40aea26d2695354ab225c15"],["/tags/AHK/index.html","e0a2e0cdc1d5b318a938c47e41c2c046"],["/tags/Clouddlare/index.html","1a628af6abac5eeba9a07ba4d42ffa29"],["/tags/Go/index.html","0d7e76b616f24ffa518c90ce3881cade"],["/tags/Intel/index.html","0e3a4308fb90ba183dc2bd22682aa1b1"],["/tags/MIUI/index.html","98966a4c3fc8e6d8e67e87fdd453f8a9"],["/tags/MNSLXOD/index.html","b02d60d65758d9c788d652b494bfd033"],["/tags/Mirouterui/index.html","fc06342084c07590dcc1a4c7a5f10e25"],["/tags/Windows/index.html","753a37dc25cf73492cfb7e57af7f48f8"],["/tags/blog/index.html","bded8a6a716bc0f45b4416f39543067f"],["/tags/index.html","5b0c17a0e50a2acae930633de733dc62"],["/tags/linux/index.html","550ba8aec1e5109069e74e4eaa108b76"],["/tags/oneindex/index.html","5339a0fe883adbc6caa6cec39fcccf86"],["/tags/python/index.html","54a26877b459a8b71bf400538a362a76"],["/tags/web/index.html","8aa6cc0a3b7311079e4b9cdb3da23c04"],["/tags/yearreport/index.html","fda4892123fcc7148e63c171f9604952"],["/tags/甜糖/index.html","3aba58bdb24671bc1d18f2084715915e"],["/tags/笔记/index.html","9c3a3d695514b41835ea8d7818ea9667"],["/tags/网站/index.html","e9bac7314743ff60b4e413f6084d6beb"],["/tags/转换/index.html","0e98bef232b9009cabc9a094566c95f1"],["/wiki/Artalk/API/index.html","4bfa1b47d9489969d7e94d48ad6045d8"],["/wiki/Artalk/QandA/index.html","5ac734db2c2e9119ae45cc974a7131f2"],["/wiki/Artalk/develop/index.html","26528a3c3239a151d645bc313f548bba"],["/wiki/Artalk/index.html","10e9ba40ba20d9f9b1fedd10c97ae68d"],["/wiki/Artalk/install-go/index.html","f971db928bf621ac7a8c206253961fb5"],["/wiki/Artalk/install/index.html","18a48cb31849106c3db871bedcb00768"],["/wiki/Artalk/more-url/index.html","330b59be2086178ddbc83fa665179410"],["/wiki/Artalk/play/index.html","11b3a52aa135a4da3957b12305ebaba1"],["/wiki/Artalk/use/index.html","dbdc237155437d6118e017ee2e8ee90c"],["/wiki/fcloud/about/index.html","e356cfb963a3719afe91a28fdab07ae6"],["/wiki/fcloud/command/index.html","d62ec188e3d3395ded63a05166a36f9f"],["/wiki/fcloud/datasafe/index.html","288d1cb04d1bf5343d09c2b50996f113"],["/wiki/fcloud/faq/index.html","fcb6913c3ef3f09e2b831f68f78c9987"],["/wiki/fcloud/index.html","3d1647e5551d2cc9c72ac0ea9898a8ba"],["/wiki/fcloud/mods/index.html","5d7169339505eeb1fbcccb8630a2c433"],["/wiki/index.html","73a0a2ab5704d9f0551b2a9c5401e0e6"],["/wiki/tags/MC/index.html","fa60312538376dcbaa44663c4e6de4dd"],["/wiki/tags/文件/index.html","cb38c4463a1c9720654f2f87b6f94980"],["/wiki/tags/文档/index.html","ec528969babdda5d5b52a839bc49b508"],["/wiki/杂物间/camc.html","7585d1ea57d04d63058eeed307fe4720"],["/wiki/杂物间/index.html","3c77147c155e82eca418ef95b3b6cb95"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons.html","e43e71523c26e0ba0a402b9a499045ae"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法.html","6e8cfd9594e7f265743417627a35f72e"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法.html","3cf8cd13a5cee1f961bec75e4060dd6c"],["/wiki/杂物间/old-pages/index.html","9d38fedd3526903612480c10f36906aa"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","764812c44b6b57a803706997898620fb"],["/wiki/杂物间/old-pages/定时关机.html","8f76b0951ae5b454170d4dc4b27d25a3"],["/wiki/杂物间/old-pages/弹出C盘の快乐.html","31240c5067b87490594d050d3899f577"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","2691aca710c2fd3f7b33b27e19ab0d4a"],["/wiki/杂物间/old-pages/现已通过myssl认证.html","9d1c29498ff09a9889674498cc946dd1"]];
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



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"onep.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"raw.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"k.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"jsd.hzchu.top"});





/* eslint-enable */
