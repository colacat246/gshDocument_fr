# README

## 接口文档

### articleList

* path: `/api/articlelist`
* params: `null`
* return: `object[]`，每项内容为`{id: 文章id, title: 文章标题}`

### articleSrc

* path: `/api/articalSrc/:id`
* params: `id` 文章id
* return: `string` 文章html路径

### sourceCodeSrc

* path: `/api/sourcecodeSrc/:id`
* params: `id` 源代码id
* return: `object[]`，每项内容为`{id: 源代码id, title: 源代码标题, content: 源代码内容}`

## TODO

后台上传pdf、源代码，解析html

文章id和内容的对应
