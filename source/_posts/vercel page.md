---
title: Vercel托管服务绑定域名打不开页面解决方案
categories: 建站思路
abbrlink: 88b12552
date: 2022-12-15 06:01:03
---
我曾经在Vercel上托管页面的时候，发现绑定域名后中国大陆境内打不开域名项目，去查了一下，原因是众所周知的

Ps：好用而且免费的东西还是没逃过这个结局，跟vercel.app这个域名在中国大陆地区的死法一样
<!--more-->
官方解决方案：

将 A 记录从 76.76.21.21 改成 76.223.126.88

将 CNAME 记录从 [cname.vercel-dns.com](http://cname.vercel-dns.com/) 修改为 [cname-china.vercel-dns.com](http://cname-china.vercel-dns.com/)

在你的域名解析服务那里修改就可以了

但是吧，虽然大家教程都是这么写的，可是我个人使用是有时候站点一段时间内恢复正常了，但过一会儿还是出问题了，依旧提示被重置链接

个人解决方案：

在Vercel的 “Domain” 域名管理处，把对应域名的解析记录也改成跟上方一样的即可（没有出现此问题就没必要这样）