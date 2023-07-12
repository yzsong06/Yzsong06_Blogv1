---
title: 用YesPlayMusic部署一个音乐解析站
abbrlink: 5a8a6c8d
date: 2023-07-12 09:30:55
tags:
---
## 前言
YesPlayMusic是一个高颜值的第三方网易云音乐播放器，可以解锁一些网易云的灰色音乐，我们可以在电脑上安装它的客户端版本，也可以自己部署一个网页版随时随地使用

## 个人示例站点  

部署在Replit上，https://music.takagi.icu

## 部署至 Vercel 

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=%e5%ae%89%e8%a3%85)。
你也可以将 API 部署到 Vercel。

2. 点击[Github仓库](https://github.com/qier222/YesPlayMusic)右上角的 Fork，复制本仓库到你的 GitHub 账号。

3. 点击[Github仓库](https://github.com/qier222/YesPlayMusic)的 Add File，选择 Create new file，输入 `vercel.json`，将下面的内容复制粘贴到文件中，并将 `https://your-netease-api.example.com` 替换为你刚刚部署的网易云 API 地址：

```json
{
  "rewrites": [
    {
      "source": "/api/:match*",
      "destination": "https://your-netease-api.example.com/:match*"
    }
  ]
}
```

4. 打开 [Vercel.com](https://vercel.com)，使用 GitHub 登录。

5. 点击 Import Git Repository 并选择你刚刚复制的仓库并点击 Import。

6. 点击 PERSONAL ACCOUNT 旁边的 Select。

7. 点击 Environment Variables，填写 Name 为 `VUE_APP_NETEASE_API_URL`，Value 为 `/api`，点击 Add。最后点击底部的 Deploy 就可以部署到
   Vercel 了。

##  部署到自己的服务器

除了部署到 Vercel，你还可以将其部署到自己的服务器上

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
2. 克隆本仓库

```sh
git clone --recursive https://github.com/qier222/YesPlayMusic.git
```

3. 安装依赖

```sh
yarn install

```

4. （可选）使用 Nginx 反向代理 API，将 API 路径映射为 `/api`，如果 API 和网页不在同一个域名下的话（跨域），会有一些 bug。

5. 复制 `/.env.example` 文件为 `/.env`，修改里面 `VUE_APP_NETEASE_API_URL` 的值为网易云 API 地址。本地开发的话可以填写 API 地址为 `http://localhost:3000`，YesPlayMusic 地址为 `http://localhost:8080`。如果你使用了反向代理 API，可以填写 API 地址为 `/api`。

```
VUE_APP_NETEASE_API_URL=http://localhost:3000
```

6. 编译打包

```sh
yarn run build
```

7. 将 `/dist` 目录下的文件上传到你的 Web 服务器

##  Docker 部署

1. 构建 Docker Image

```sh
docker build -t yesplaymusic .
```

2. 启动 Docker Container

```sh
docker run -d --name YesPlayMusic -p 80:80 yesplaymusic
```

3. Docker Compose 启动

```sh
docker-compose up -d
```

YesPlayMusic 地址为 `http://localhost`

##  部署至 Replit

1. 新建 Repl，选择 Bash 模板

2. 在 Replit shell 中运行以下命令

```sh
bash <(curl -s -L https://raw.githubusercontent.com/qier222/YesPlayMusic/main/install-replit.sh)
```

3. 首次运行成功后，只需点击绿色按钮 `Run` 即可再次运行

4. 由于 replit 个人版限制内存为 512Mb（教育版为 2G），构建过程中可能会失败，请再次运行上述命令或运行以下命令：

```sh
cd /home/runner/${REPL_SLUG}/music && yarn installl && yarn run build
```

GitHub仓库：https://github.com/qier222/YesPlayMusic