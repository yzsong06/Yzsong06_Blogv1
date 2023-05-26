---
abbrlink: b18b1598
categories:
  - - 建站资源
date: '2023-03-14 20:27:54'
cover: https://tse3-mm.cn.bing.net/th/id/OIP-C.NCQxpxuHb6VOL_9uts3LiwHaDt?pid=ImgDet&dpr=3
tags: []
title: 国内高速静态资源CDN汇总
updated: 'Wed, 15 Mar 2023 02:16:57 GMT'
---
### 前言

最近在部署静态博客的时候，总是能遇到这个页面资源缺失，那个页面资源访问慢的问题。一看配置文件，嚯，配置文件CDN全是Jsdelivr资源地址。虽然Jsdelivr雀食很全，但是因为国内严重滥用的问题，导致Jsdelivr在国内的表现相当不稳定，说不定哪天直接凉了都不好说，所以说我替换了部分基于Unpkg的资源文件CDN地址，例如说评论区的JS与CSS资源，或者站点友链与说说的部分资源，这样可以使得国内访问资站点资源速度加快，国内访客访问的时候也不会很难受，不过这样国际访问速度就比较一般了（~~全中文站点也不指望国际访客~~）

### CDNJS CDN

目前国内有很多相关CDNJS的 CDN，可以高速支持相关包文件的访问下载，例如说

* BootCDN: [www.bootcdn.cn](https://link.juejin.cn?target=https%3A%2F%2Fwww.bootcdn.cn "https://www.bootcdn.cn")
* 七牛云: [www.staticfile.org](https://link.juejin.cn?target=https%3A%2F%2Fwww.staticfile.org%2F "https://www.staticfile.org/")
* 360: [cdn.baomitu.com](https://link.juejin.cn?target=https%3A%2F%2Fcdn.baomitu.com%2F "https://cdn.baomitu.com/")
* 字节跳动: [cdn.bytedance.com](https://link.juejin.cn?target=https%3A%2F%2Fcdn.bytedance.com%2F "https://cdn.bytedance.com/")

但这些 CDN 上的包资源并不全，很多NPM包，在这些 CDN 上是找不到的。原因是，它们都是从 [CDNJS](https://link.juejin.cn?target=https%3A%2F%2Fcdnjs.com%2F "https://cdnjs.com/") 上同步的数据，CDNJS 并不会把所有的 NPM 包进行同步，所以当你需要的一些 NPM 包没有在 CDNJS 上面，上面的CDN就没有用武之地了。

解决可以访问所有 NPM 包的问题，可以使用 [Unpkg](https://link.juejin.cn?target=https%3A%2F%2Funpkg.com%2F "https://unpkg.com/")与 [jsdelivr](https://link.juejin.cn?target=https%3A%2F%2Fcdn.jsdelivr.net%2F "https://cdn.jsdelivr.net/")，但刚才我们也说过了，他们在国内的访问速度是不大行

于是就寻找整理了下，国内的 Unpkg 替代品。

### 国内 Unpkg NPM

目前比较常见的对外的国内 Unpkg 有两个：

* 饿了么：[github.elemecdn.com](https://link.juejin.cn?target=https%3A%2F%2Fgithub.elemecdn.com%2F "https://github.elemecdn.com/")、[npm.elemecdn.com](https://link.juejin.cn?target=https%3A%2F%2Fnpm.elemecdn.com%2F "https://npm.elemecdn.com/")
* 知乎：[unpkg.zhimg.com](https://link.juejin.cn?target=https%3A%2F%2Funpkg.zhimg.com%2F "https://unpkg.zhimg.com/")

但就实际测试来看，这两家CDN都有优缺点，饿了么CDN较全，但部分资源屏蔽且版本较旧，知乎CDN有白名单，整体表现跟上面CDNJS系列半斤八两

这两家CDN都是部署在国内阿里云的 CDN 上。

还有一些民间自建的CDN，这里只列出本博客使用的[TianliCDN](https://tianli-blog.club/jsd/)，这个CDN部署在腾讯云上，速度也还不错，就是月流量有一定限制，不适合大型项目。

### 后话

博客要想流量与浏览量都不错，除了要有好的文章以外，还有就是要保证站点的访问速度够好，这样可以降低访客流失率，确保站点站流量。
