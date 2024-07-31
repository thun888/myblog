utils.jq(() => {
    $(function () {
      const els = document.getElementsByClassName('ds-artalk');
      for (var i = 0; i < els.length; i++) {
        const el = els[i];
        const limit = parseInt(el.getAttribute('limit')) || 10;
        const hidename = el.getAttribute('hide')
        const api = el.getAttribute('api') + '&limit=' + limit;
        if (api == null) {
          continue;
        }
        utils.request(el, api, function (data) {
          data = data.data || [];
          data.forEach((item, i) => {
            // 去掉hidename
            if (item.nick == hidename) {
              return
            }
            // 去掉<a>标签
            content = item.content_marked.replace(/<a href=\"(.*?)\">(.*?)<\/a>/g, (match, $1, $2) => {
                return $2;
            });
            // 去掉<pre>标签及其内部内容
            content = content.replace(/<pre[\s\S]*?<\/pre>/gi, '「代码框」');
            // console.log(content)
            var cell = '<div class="timenode" index="' + i + '">';
            cell += '<div class="header">';
            cell += '<div class="user-info">';
            // cell += '<img src="https://cravatar.cn/avatar/' + (item.email_encrypted) + '?d=mp&s=240">';
            cell += '<span>' + item.nick + '</span>';
            cell += '</div>';
            cell += '<span>' + new Date(item.date).toLocaleString() + '</span>';
            cell += '</div>';
            cell += '<a class="body" href="' + item.page_url + '#atk-comment-' + item.id + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += content;
            cell += '</a>';
            cell += '</div>';
            $(el).append(cell);
          });
        });
      }
    });
  });