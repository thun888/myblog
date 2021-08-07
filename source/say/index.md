---
robots: noindex,nofollow
sitemap: false
menu_id: more
seo_title: 留言版
toc_title: 留言版
header: false
---

### 留言板

{ % folding child:codeblock open:false color:yellow 留言/评论须知： % }

1. 禁止发表违法暴乱，黄赌毒（包括但不限于）的言论
2. 本站支持邮件发送评论信息（收到回复时），在评论时请务必使用真实可用的邮箱
   （如果没有收到回复邮件可以把`thun888@qq.com`加入白名单）
3. 拒绝无意义灌水，同ip五次以上封禁（虽然目前Artalk还没能支持，但不妨碍我5分钟过一遍数据(❁´◡`❁)）
4. 网址（包括昵称指向和评论内容）禁止以下类型
   - 推广链接（包括引流，拉人头等）
   - 含色情，反动（包括但不限于）如果有，就去和网警喝茶吧，说不定我还有个50万👌
   - 广告链接（京东淘宝等，不过会看情况处理，合理讨论不会删除）
5. 网址可留空
6. 头像基于[Gravarar](http://cn.gravatar.com/)而不是QQ
7. 评论后端在韩国，如果遇到加载缓慢记得刷新~
8. 邮箱，IP仅对管理员可见，后端支持ssl，评论数据将全程加密，大可放心
9. 数据会经常备份，但在开学后会降到1~2月备份一次
10. 图床尽量避免使用自建图床（SLA有保证,不会跑路的除外）
11. 表情存放在**去不图床**，**哔哩哔哩**，在禁用缓存下需要约0.8s，代理（eu）下需要约2.5s

{ % endfolding % }

当然我相信没人会认真看上面的文字，记住**文明上网，合理发言**就好U•ェ•*U




<HR width="95%" color=#987cb9 SIZE=3>
  <a id="artalkup" href="javascript:load();" style="text-align: center;display:block;background-color:var(--link-hover-bg-color);font-size:20px">(o゜▽゜)o点击加载留言</a><span id="fileup" style="text-align: center;display:block;"></span>
  <HR width="95%" color=#987cb9 SIZE=3>
  <div id="ArtalkComments"></div>
  <script src="https://cdn.jsdelivr.net/npm/jquery-pjax@2.0.1/jquery.pjax.min.js"></script>
  <script type="text/javascript">
  $(document).pjax('a', '#ArtalkComments', {
    fragment: '.main' 
  })
  </script>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/gh/thun888/tuku@latest/js/Artalk.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/ArtalkJS/Artalk@master/dist/Artalk.min.css">
  <script>
function load(){var script=document.createElement("script");script.type="text/javascript";script.src='/js/artalkconfig.js';document.body.appendChild(script)}
  </script>
