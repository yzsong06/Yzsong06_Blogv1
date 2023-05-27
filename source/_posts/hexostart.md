---
abbrlink: 10a098ec
categories:
  - - 建站实践
date: '2023-02-16 18:43:19'
title: 建立一个Hexo站点
updated: 'Fri, 17 Feb 2023 01:34:18 GMT'
---
<!--more-->

### 前言：

现在市面上的博客站很多，比如说：CSDN，博客园、简书、掘金、知乎、小红书等等。

这些博客的优势是可以直接在上面发表博客，用户交互相对不错，支持的写作语言也足够多（Md与Html都有兼容），因为站点SEO权重不错，搜索引擎文章爬取速度也很快，百度也能够很快爬取搜索到博客。缺点是容易受到平台的各种限制以及各种位置上恶心的广告。

而我们选择自己购买域名和服务器，相对来说成本就有些略高，不光是说这些购买成本，单单是花力气去自己搭这么一个网站，还要定期去维护它，对于我们大多数人来说，实在是没有这样的精力和时间花在建设维护上（~~Hexo建设前期其实也略麻烦，但胜在无服务器，后期维护省劲~~）

而这个时候，Hexo就成为了一个不错的选择，它具有以下优势：

1. 纯静态文件，站点打开速度快
2. 不依赖服务器，可以部署在Github，Gitlab等代码托管平台，也可以部署在Serverless环境，例如Vercel，Netlify，~~腾讯云COS（并不免费）~~ 等一类平台
3. 内容批量修改十分方便。我们可以直接在编辑器全局替换就行（~~在线编辑器不一定~~），站点不依赖数据库更新数据。
4. 免费开源，快速部署。你可以在几分钟内就快速在本地构建生成一个Hexo站点。

Hexo官方简介：

Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

### 安装Hexo依赖环境：

（如果说你不想用传统部署或者不会，可以划到下面的从仓库部署方式，但我们不推荐这样部署，会对日后安装主题与插件维护更新造成很大的困扰）

首先我们要在我们本地设备（~~电脑与手机~~）先安装Hexo需求的依赖环境：

* [Node.js](http://nodejs.org/) (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
* [Git](http://git-scm.com/)

###### 安装Git环境：

* Windows：下载并安装 [git](https://git-scm.com/download/win).
* Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) 或者下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/)。
* Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
* Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`
* Android Termux（一般为Arm64，对于中国大陆地区用户，推荐先更换为国内镜像源）：`pkg install git`

###### 安装 Node.js环境：

Node.js 为大多数平台提供了官方的 [安装程序](https://nodejs.org/zh-cn/download/)。对于中国大陆地区用户，可以前往 [淘宝 Node.js 镜像](https://npm.taobao.org/mirrors/node) 下载。

其它的安装方法：

* Windows：通过 [nvs](https://github.com/jasongin/nvs/)（推荐）或者 [nvm](https://github.com/nvm-sh/nvm) 安装。
* Mac：使用 [Homebrew](https://brew.sh/) 或 [MacPorts](http://www.macports.org/) 安装。
* Linux（DEB/RPM-based）：从 [NodeSource](https://github.com/nodesource/distributions) 安装。
* Android Termux ：`pkg install nodejs`
* 其它：使用相应的软件包管理器进行安装，可以参考由 Node.js 提供的 [指导](https://nodejs.org/zh-cn/download/package-manager/)。

###### 对于 Mac 和 Linux 同样建议使用 nvs 或者 nvm，以避免可能会出现的权限问题。

### 安装Hexo：

在我们准备好依赖环境以后，就可以开始安装Hexo了

* 所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo`npm install -g hexo-cli`

如此，你就安装完成了，如果遇到了问题，可尝试查看Hexo官方文档以获得解决方案[https://hexo.io/zh-cn/docs/index.html](%E2%80%8Bhttps://hexo.io/zh-cn/docs/index.html%E2%80%8B)

### 从仓库部署Hexo（不推荐）

如果说你没有美化与插件升级需求或者不想在本地安装Hexo环境（~~或者太菜了~~），可以从代码平台仓库快速fork复制部署博客环境（~~然后你就可以跳过下面的传统部署教程~~）

个人仓库：[Github仓库](https://github.com/yzsong06/hexo-netlify-cms)（本身是针对Netlify+CMS的，但你依然可以把source目录admin文件夹删掉，~~然后装作不知道这是针对Netlify的~~，该仓库主题是基于Fluid的，还是很不错的MD主题的）

### 生成一个Hexo站点：

接下来初始化一下hexo

```bash
hexo init myblog
```

这个myblog可以自己取什么名字都行，然后输入如下指令：

```bash
cd myblog //进入这个myblog文件夹
npm install
```

等待构建完成后，输入如下指令启动博客，你可以在[https://localhost:4000](https://localhost:4000)找到博客

```bash
hexo g
hexo server
```

这样你就构建完成了，出于时间关系，后续教程我会尽快补充，有疑问可以在评论区留言咨询，转载此文章请注明出处，谢谢。
