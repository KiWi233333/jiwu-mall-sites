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

## ⏳ 起步 | Project Setup 

```sh
# node 版本 >= 18
npm install -g pnpm
pnpm install
# 一键运行
npm run install
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
node .output/server/index.mjs
```

```nginx
#  jiwu.kiwi2333.top;
server {  
    listen 80;  
    listen [::]:80;	#监听ipv6
    server_name jiwu.kiwi2333.top; 
    rewrite ^(.*)$ https://$host$1 permanent;	#rewrite跳转 
  }
  
server
    {      
      listen 443 ssl http2;
      listen [::]:443 ssl http2;
      # listen 443 http3 reuseport;  # UDP listener for QUIC+HTTP/3
      # 域名，多个以空格分开
      server_name  jiwu.kiwi2333.top;
      # ssl证书地址
      ssl_certificate /www/wwwroot/java_node_ssl/.kiwi2333.top/fullchain.pem;
      ssl_certificate_key /www/wwwroot/java_node_ssl/.kiwi2333.top/cert.key;# key文件的路径
      
      # ssl验证相关配置
      ssl_session_timeout 5m;    #缓存有效期
      ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;    #安全链接可选的加密协议
      ssl_prefer_server_ciphers on;   #使用服务器端的首选算法
      # 设置是否允许 cookie 传输
      add_header Access-Control-Allow-Credentials true;
      # 允许请求地址跨域 * 做为通配符
      add_header Access-Control-Allow-Origin * always;
      # 允许跨域的请求方法
      add_header Access-Control-Allow-Methods 'GET, POST, PUT,DELET,OPTIONS';
      add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToke,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
      if ($request_method = 'OPTIONS') {
          return 204;
      } 
      location / {
          proxy_pass http://127.0.0.1:3000;
      }
    }
  
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