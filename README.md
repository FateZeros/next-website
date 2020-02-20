# next-website

## 网站开发

使用 [next.js](https://github.com/zeit/next.js) 开发。

[Doc 文档](https://nextjs.org/docs)

[examples](https://github.com/zeit/next.js/tree/master/examples)

### 安装 next 和 less

```bash
npx create-next-app

# 使用 less
npm install --save @zeit/next-less less

npm install --save null-loader
```

### 使用 antd

```bash
npm install antd --save

npm install babel-plugin-import --save-dev
```

CSS Module 和 antd 同时使用会出现一些样式问题。

### pm2 部署

```bash

pm2 start npm --name "next-web" -- run build
```
