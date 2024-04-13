<h1 align=center margin="10em" style="margin:2em;letter-spacing:0.3em;">
<img src="./.doc/logo.png" width = "50" height = "50" alt="极物圈" align=center />
极物圈</h1>

###  介绍
极物圈是一个综合性平台，集商城和社交功能于一体。在这个平台上，用户可以轻松购买虚拟商品，并且可以发布个人帖子，与他人互动，进行评论等。该平台注重用户体验，为用户提供了一个在你圈子交流、好物推荐、分享和购物的多功能环境。
  （该版本不是源代码仓库，只有部署代码！！！只适合参考互相学习）

###  技术

```
基于Nuxt3 + Element-plus + pinia 基本框架
```

###  体验 
[![Netlify Status](https://api.netlify.com/api/v1/badges/a1fa4fb4-82dc-4fef-9e1b-b06aa2463686/deploy-status)](https://app.netlify.com/sites/jiwu/deploys)

[<img src="./.doc/logo.png" width = "22" height = "22" alt="图片名称" align=center /> 极物圈 —— 体验入口 netlify](https://jiwu.netlify.app)



###  项目截图
> 主页 Home
 
![主页](./.doc/home.png)

> 全局夜间模式 Light / Dark

![暗黑](./.doc/index_dark.png)

> 商城购物 Mall

![商品](./.doc/goods.png)

> 钱包 Wallet

![钱包](./.doc/wallet.png)


> 社区 Community

![社区](./.doc/comm.png)
![社区](./.doc/comm2.png)

> 聊天 Chat

![聊天](./.doc/chat.png)

![聊天](./.doc/chat1.png)

> 聊天好友 ChatFriend

![聊天 - 好友](./.doc/chat2.png)

> 全局移动端简易适配

![聊天 - 移动端](./.doc/image.png)



## ⏳ 起步 | Project Setup  

```sh 
# run prod 运行生产环境
node ./server/index.mjs
```

### ✨ 开发 <small>（跳过）</small>

```sh
pnpm run dev
```

### 📦 打包 <small>（跳过）</small>

```sh
pnpm run build
```

### 🎊 部署
```sh
node ./server/index.mjs
```

### ❌ pnpm install error

查看源

```sh
pnpm get registry 
```

临时修改
```sh
pnpm --registry https://registry.npm.taobao.org install any-touch
```

持久使用
```sh
pnpm config set registry https://registry.npm.taobao.org
```

还原
```sh
pnpm config set registry https://registry.npmjs.org
```