---
title: 在Replit部署BingAI镜像站
abbrlink: 1773c51d
date: 2023-07-12 09:33:05
tags:
---
ChatGPT这几年很火，同样也出现了大量基于此项目的新项目。不过在国内使用就不是很友好了，目前国内有不少衍生产品，但我们今天的主角并不是它们。而是前一阵子微软发布的基于ChatGPT的新产品，NewBing。 我愿称其为“Bing Plus“（Doge），但是国内的必应拥有它也是遥遥无期。 不过，在GitHub上出现了一个新的项目（[Go-Proxy-BingAi](https://github.com/adams549659584/go-proxy-bingai)，它是基于Go语言和Vue3的，能够使你在国内简单的使用NewBing的基本功能和一些拓展功能，而且不需要下载Edge也不需要登录，还是比较不错的。 但官方的部署教程中仍为本地部署和Vercel部署，这两个一个并不适合白嫖（Doge），另一个因为没有Websocket，在国内的体验并不是很好。 虽然我们可以使用作者基于cloudflare建立的反代服务器，但是随着这个项目用的人越来越多，官方的cloudflare也很显然是吃不消的，虽然我们也可以通过自己部署cloudflare worker来解决限额问题，但cloudflare在国内的表现大家都是有目共睹的，那么就没有既能白嫖也能提高速度的办法吗？我之前也在思考这个问题，巧合的是，我正在协作的项目使用了replit作为WebIDE，这不就有办法了（Doge）！ 所以很快我就写了个能够一键部署它到replit的[Github仓库](https://github.com/yzsong06/Replit-Go-Proxy-BingAi)


### 自动部署：

[](https://repl.it/github/yzsong06/Replit-Go-Proxy-BingAi)

![Run](https://repl.it/badge/github/yzsong06/Replit-Go-Proxy-BingAi)
### 绑定自定义域名

启动项目后，在弹出的“Webview”界面点击地址栏旁边的“编辑”图标，点击“Create domain link”，输入你想绑定的自定义域名后，按照提示在域名解析商添加指定CNAME与TXT解析记录。 等待解析完成后，回到Replit页面，点击下方“Link domain”即可使用。

![绑定域名](https://cdn.jsdelivr.net/gh/yzsong06/Replit-Go-Proxy-BingAi/img/02.webp)
### 演示站点：

[](https://bing.vcanbb.top/)[https://bing.vcanbb.top/](https://bing.vcanbb.top/) （官方）
[](https://bing-vercel.vcanbb.top/)[https://bing-vercel.vcanbb.top/](https://bing-vercel.vcanbb.top/) （官方Vercel）
[](https://newbing.takagi.icu)[https://newbing.takagi.icu](https://newbing.takagi.icu) （一只鬆自建）