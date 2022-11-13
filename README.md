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
* return: object[]，每项为`{id: 源代码id, title: 源代码标题, content: 源代码内容}`

### 下载article

* path: `/api/downloadArticle/:id`
* params: `id` 源代码id
* return: 下载的文件

## 后台尺寸配合

pdf2html输出尺寸使用宽度1080

`pdf2htmlEX --fit-width 1200`

## TODO
