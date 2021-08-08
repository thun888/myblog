---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: API
order: 3
---

> 以下所以请求地址均为所搭建的后端地址
>
> eg:https://xxx.com/index.php
>
> 还有一些后续补充（例如审核部分），方面会分类~

### 获取页面数据

> 请求方法:POST

| **参数名称** | 参数值     | 说明                     |
| ------------ | ---------- | ------------------------ |
| action       | CommentGet | **获取页面数据（必须）** |
| page_key     | page_key   | 页面唯一ID（必须）       |
| limit        |            | 请求获取评论数量         |
| offset       |            | 请求在xx条评论之后的评论 |

#### JSON 回复

根对象：

| 字段    | 类型  | 内容                       | 备注 |
| ------- | ----- | -------------------------- | ---- |
| success | str   | true/false                 |      |
| msg     | str   | 获取成功/page_key 不能为空 |      |
| data    | array | 信息本体                   |      |

`data`数组：

| 项                     | 类型  | 内容                     | 备注                       |
| ---------------------- | ----- | ------------------------ | -------------------------- |
| comments               | obj   | 评论信息                 |                            |
| offset                 | num   | 请求获取评论数量         | 与请求保持一致             |
| limit                  | num   | 请求在xx条评论之后的评论 | 与请求保持一致             |
| total_parents          | num   |                          | 父级评论数量               |
| total                  | num   |                          | 总评论数量（包括回复他人） |
| admin_nicks            | obj   |                          | 管理员昵称                 |
| admin_encrypted_emails | obj   |                          | 管理员邮箱（md5加密）      |
| page                   | array |                          | 该页面评论信息             |

{% folding child:codeblock open:false color:yellow comments %}

`comments`：

| 项              | 类型 | 内容                    | 备注                          |
| --------------- | ---- | ----------------------- | ----------------------------- |
| id              | num  |                         | 该评论唯一id                  |
| content         | str  |                         | 评论内容                      |
| nick            | str  |                         | 昵称                          |
| link            | str  |                         | 链接                          |
| page_key        | str  |                         | page_key                      |
| rid             | num  |                         | 所回复评论的id（没有默认为0） |
| ua              | str  |                         | 浏览器ua                      |
| date            | str  | YYYY-MD h:m:s           | 时间                          |
| is_collapsed    | str  | true/false              | 是否折叠                      |
| email_encrypted | str  |                         | 邮箱（md5加密）               |
| badge           | obj  | "name": "", "color": "" | 牌子                          |
| is_admin        | str  | true/false              | 是否为管理员                  |

 {% endfolding %}


{% folding child:codeblock open:false color:yellow page %}

`comments`：

| 项               | 类型 | 内容       | 备注               |
| ---------------- | ---- | ---------- | ------------------ |
| id               | num  |            | 该页面唯一id(数字) |
| page_key         | str  |            | 页面唯一ID         |
| is_close_comment | str  | true/false | 是否禁用评论       |

 {% endfolding %}

### 回复评论

> 请求方法:POST

| **参数名称** | 参数值     | 说明                               |
| ------------ | ---------- | ---------------------------------- |
| action       | CommentAdd | **添加评论（必须）**               |
| content      |            | 评论内容（必须）                   |
| nick         |            | 昵称（必须）                       |
| email        |            | 邮箱（必须）                       |
| link         |            | 链接                               |
| rid          |            | 所回复评论的id（没有默认为0）      |
| page_key     |            | page_key（必须）                   |
| password     |            | 管理员密码（仅以管理员身份回复时） |
| captcha      |            | 验证码（仅触发验证时）             |

#### JSON 回复

根对象：

| 字段    | 类型  | 内容                            | 备注 |
| ------- | ----- | ------------------------------- | ---- |
| success | str   | true/false                      |      |
| msg     | str   | 评论成功/xxx不能为空/需要验证码 |      |
| data    | array | 信息本体                        |      |

`data`数组：

| 项              | 类型 | 内容                    | 备注                                 |
| --------------- | ---- | ----------------------- | ------------------------------------ |
| id              | num  |                         | 该评论唯一id                         |
| content         | str  |                         | 评论内容                             |
| nick            | str  |                         | 昵称                                 |
| link            | str  |                         | 链接                                 |
| page_key        | str  |                         | page_key                             |
| rid             | num  |                         | 所回复评论的id（没有默认为0）        |
| ua              | str  |                         | 浏览器ua                             |
| date            | str  | YYYY-MD h:m:s           | 时间                                 |
| is_collapsed    | str  | true/false              | 是否折叠                             |
| email_encrypted | str  |                         | 邮箱（md5加密）                      |
| badge           | obj  | "name": "", "color": "" | 牌子                                 |
| is_admin        | str  | true/false              | 是否为管理员（仅以管理员身份回复时） |

`data`数组(回复"需要验证码"时)：

| 项           | 类型 | 内容            | 备注 |
| ------------ | ---- | --------------- | ---- |
| need_captcha | str  | true            |      |
| img_data     | str  | data:image..... |      |

### 关闭评论

> 请求方法:POST

| **参数名称**     | 参数值  | 说明                           |
| ---------------- | ------- | ------------------------------ |
| action           | SetPage | **页面设置（必须）**           |
| nick             |         | 昵称（必须）                   |
| email            |         | 邮箱                           |
| page_key         |         | 页面唯一ID                     |
| password         |         | 管理员密码                     |
| is_close_comment | 1/0     | **页面状态，1=>关闭，2=>打开** |

#### JSON 回复

根对象：

| 字段    | 类型  | 内容                       | 备注 |
| ------- | ----- | -------------------------- | ---- |
| success | str   | true/false                 |      |
| msg     | str   | 页面已更新~/需要管理员身份 |      |
| data    | array | 页面信息                   |      |

`data`数组：

| 项               | 类型 | 内容       | 备注                 |
| ---------------- | ---- | ---------- | -------------------- |
| id               | num  |            | 该页面唯一id（数字） |
| page_key         | str  |            | 该页面唯一id         |
| is_close_comment | str  | true/false | 是否处于关闭状态     |

`data`数组(回复"需要管理员身份"时)：

| 项            | 类型 | 内容       | 备注 |
| ------------- | ---- | ---------- | ---- |
| need_password | str  | true/false |      |

### 通知中心

> 请求方法:POST

| **参数名称** | 参数值                    | 说明                                               |
| ------------ | ------------------------- | -------------------------------------------------- |
| action       | CommentGetV2              | **获取通知（必须）**                               |
| nick         |                           | 昵称（必须）                                       |
| email        |                           | 邮箱（必须）<br>（如果不填能获取成功但无数据返回） |
| type         | mentions/all/mine/pending | 对应提及/全部/我的/待审（必须）                    |
| limit        | 999                       | 默认为999                                          |
| password     |                           | 仅以管理员身份时                                   |

> 💢回复与**获取页面数据**一致

### 折叠评论

> 请求方法:POST

| **参数名称** | 参数值          | 说明                           |
| ------------ | --------------- | ------------------------------ |
| action       | CommentCollapse | **评论设置（必须）**           |
| id           |                 | 所折叠评论ID                   |
| nick         |                 | 昵称（必须）                   |
| email        |                 | 邮箱                           |
| password     |                 | 管理员密码                     |
| is_collapsed | 1/0             | **页面状态，1=>关闭，2=>打开** |

#### JSON 回复

根对象：

| 字段    | 类型  | 内容                            | 备注 |
| ------- | ----- | ------------------------------- | ---- |
| success | str   | true/false                      |      |
| msg     | str   | 评论已(取消)折叠/需要管理员身份 |      |
| data    | array | 评论信息                        |      |

`data`数组：

| 项           | 类型 | 内容       | 备注                 |
| ------------ | ---- | ---------- | -------------------- |
| id           | num  |            | 该评论唯一id（数字） |
| is_collapsed | str  | true/false | 是否处于折叠状态     |

`data`数组(回复"需要管理员身份"时)：

| 项            | 类型 | 内容       | 备注 |
| ------------- | ---- | ---------- | ---- |
| need_password | str  | true/false |      |

### 删除评论

> 请求方法:POST

| **参数名称** | 参数值     | 说明                 |
| ------------ | ---------- | -------------------- |
| action       | CommentDel | **评论删除（必须）** |
| id           |            | 所删除评论ID         |
| nick         |            | 昵称（必须）         |
| email        |            | 邮箱                 |
| password     |            | 管理员密码           |

#### JSON 回复

根对象：

| 字段    | 类型  | 内容                      | 备注 |
| ------- | ----- | ------------------------- | ---- |
| success | str   | true/false                |      |
| msg     | str   | 评论已删除/需要管理员身份 |      |
| data    | array | {"del_total":1}           |      |

### 检查管理员身份（密码）

> 请求方法:POST

| **参数名称** | 参数值     | 说明                       |
| ------------ | ---------- | -------------------------- |
| action       | AdminCheck | **检查管理员密码（必须）** |
| nick         |            | 昵称（必须）               |
| email        |            | 邮箱（必须）               |
| password     |            | 管理员密码                 |

#### JSON 回复

```json
{"success":true,"msg":"密码正确","data":null}
```

