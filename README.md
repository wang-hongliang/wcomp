# 智慧科技图片处理 v1.0.2

用于图片上传和处理 (缩放,裁剪,镜像,旋转,滤镜等)

## 安装方式

```javascript
$ npm i zhkj-ui
```



## 使用方式

```javascript
// 在main.js中引入与注册
import zhkjUi from "zhkj-ui"
import "zhkj-ui/dist/zhkj-ui.css"
Vue.use(zhkjUi);
Vue.component('imageUpload', zhkjUi.imageUpload);
```

```html
// 普通使用
<imageUpload action="http://xxx/api/upload" v-model="fileurl" @upload="upload" tip="只能上传jpg/png文件，且不超过500kb"></imageUpload>

// avue.js中使用
<template>
    ...
	<avue-form :option="option" v-model="form"></avue-form>
	...
</template>
```

```javascript
data:{
    return {
         form: {},
         option: {
            column: [
              {
                label: '图片上传',
                prop: 'thumb',
                component: 'imageUpload',
                span: 24,
                event: {
                  upload: (val) => {
                    this.form.thumb = val;
                  },
                },
                params: {
                  action: '/api/blade-resource/oss/endpoint/put-file',
                  headers: {
                    Authorization: 'tokenxxxxxx',
                  },
                  tip: "只能上传jpg/png文件，且不超过500kb",
                }
              }
           ]
      },
    }
}

```

## 配置项

| 参数      | 说明                        | 类型         | 可选值 | 默认值        |
| :-------- | --------------------------- | ------------ | :----: | ------------- |
| propsHttp | 返回数据结构体配置          | object       |   —    | {res: 'data'} |
| data      | 上传时附带的额外参数        | object       |   —    | —             |
| multiple  | 是否支持多选文件            | boolean      |   —    | false         |
| limit     | 最大允许上传个数            | number       |   —    | 3             |
| fileSize  | 上传文件的大小限制，单位为M | number       |   —    | —             |
| headers   | 携带的头部附加参数          | object       |   —    | —             |
| accept    | upload时文件类型            | String/Array |   —    | —             |
| tip       | 文字提示                    | String       |   —    | —             |
| action    | 上传的地址                  | String       |   —    | —             |



## 第三方依赖

[Element-ui](https://element.eleme.cn/#/zh-CN/component/installation)

[tui-image-editor](https://ui.toast.com/tui-image-editor)



