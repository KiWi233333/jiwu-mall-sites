<h2 align=center margin="10em" style="margin:4em;letter-spacing:0.3em;">
<img src="./public/images/logo/logo.png" width = "40" height = "40" alt="图片名称" align=center />
极  物  圈  </h2>

###  介绍
极物圈是一个综合性平台，集商城和社交功能于一体。在这个平台上，用户可以轻松购买虚拟商品，并且可以发布个人帖子，与他人互动，进行评论等。该平台注重用户体验，为用户提供了一个在你圈子交流、好物推荐、分享和购物的多功能环境。
  （该版本不是源代码仓库，只有部署代码！！！）
###  技术

```
基于Nuxt3 + element-plus + pinia 基本框架
```

###  体验
[<img src="./public/images/logo/logo.png" width = "20" height = "20" alt="图片名称" align=center /> 极物圈 —— 体验入口](https://jiwu.netlify.app)

###  项目截图

![主页](./.doc/home.png)

![暗黑](./.doc/index_dark.png)

![商品](./.doc/goods.png)

![钱包](./.doc/wallet.png)

![聊天](./.doc/chat.png)

![聊天](./.doc/chat1.png)

![聊天 - 好友](./.doc/chat2.png)

## ⏳ 起步 | Project Setup  

```sh 
# run prod 运行生产环境
node ./server/index.mjs
```

### ✨ 开发

```sh
pnpm run dev
```

### 📦 打包

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