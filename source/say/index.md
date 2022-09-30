---
robots: noindex,nofollow
sitemap: false
menu_id: more
seo_title: 留言版
toc_title: 留言版
header: false
---

### 留言板

{% folding child:codeblock open:false color:yellow 留言/评论须知： %}

1. 禁止发表违法暴乱，黄赌毒（包括但不限于）的言论
2. 本站支持邮件发送评论信息（收到回复时），在评论时请务必使用真实可用的邮箱
   （如果没有收到回复邮件可以把`thun888@thun888.xyz`加入白名单）
3. 拒绝无意义灌水，同ip五次以上封禁
4. 网址（包括昵称指向和评论内容）禁止以下类型
   - 推广链接（包括引流，拉人头等）
   - 含色情，反动（包括但不限于）
   - 广告链接（京东淘宝等，不过会看情况处理，合理讨论不会删除）
5. 如果遇到加载缓慢记得刷新~

{% endfolding %}

当然，记住**文明上网，合理发言**就好U*•ェ•U

在下方开始留言吧~


<HR width="95%" color=#987cb9 SIZE=3>
  <div id="Comments"></div>
  <link href="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.min.css" rel="stylesheet">
  <script src="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.js"></script>
  <script>
      var page = window.location.href.split('#')[0]
      if (page.endsWith("index.html")) {
          pagekey = page.substring(0, page.length - 10)
      } else {
          pagekey = page
      }
      new Artalk({
          el: '#Comments',
          pageKey: decodeURI(pagekey),
          placeholder: '来啊，快活啊[]~(￣▽￣)~*', // 占位符
          sendBtn: 'Fire!',
          pageTitle: '',
          server: 'https://artalk.thun888.xyz/',
          site: 'Blog',
          emoticons: "https://raw.thun888.xyz/thun888/asstes/master/files/json/artalk/default.json",
      })
      document.getElementsByClassName("atk-sidebar-layer")[0].style.display = "none"
  </script>