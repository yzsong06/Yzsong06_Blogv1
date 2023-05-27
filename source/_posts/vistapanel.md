---
abbrlink: 2b0c38fa
alias:
- /2023/02/01/vistapanel面板主机使用cname解析域名并使用cf免费cdn与ssl-1/
- /2023/01/29/vistapanel1/
categories:
- 建站实践
date: '2022-12-28 17:01:01'
tags: []
title: VistaPanel面板主机使用Cname解析域名并使用Cf免费CDN与SSL
updated: Wed, 15 Mar 2023 02:32:02 GMT
---
之前曾经嫖过一台使用VistaPanel主机面板的主机，最近打算给它绑定一个域名来建个站用，因为我域名解析服务用的Cloudflare，就想要给它套个Cf提供的免费CDN来让网站访问速度稳定

<!--more-->

（主机提供商的域名解析在国内存在部分超时，速度不稳定与慢的问题），同时也想使用Cf提供的通配符免费SSL证书，但是这些都要先使用Cf的CDN加速才可以实现，而面板提供的还是Ns地址，是不能套用Cf Cdn加速的，同时Ns地址也对解析设置不友好（例如域名生效速度慢），所以综合研究了下知道了怎么通过Cname绑定域名，下面是教程

1.首先登录VistaPanel面板后台，并且打开停放域设置，如图所示

[![3b5125a5e98b4c9136dfbdfb675e0759.md.png](https://s1.imagehub.cc/images/2023/02/05/3b5125a5e98b4c9136dfbdfb675e0759.md.png)](https://www.imagehub.cc/image/x1FgT)

2.接下来按照面板提供的Ns地址，先去域名DNS解析那里为你想要绑定的域名设置Ns解析（这一步是为了让面板绑定你想绑定的域名，使用Cname个人测试无法直接绑定域名）

3.等待DNS解析生效后，把域名输入到上方输入框，单击面板“添加托管域”，如果出现绿色界面完成则为绑定成功。

4.接下来把域名DNS解析那里的Ns解析记录删除，然后设定Cname解析地址为你面板免费赠送的二级域名（获取服务器IP）。

5.等待解析生效即可。

进阶（使用Cloudflare Cdn加速域名并使用其免费SSL证书）

首先你要先有一个解析绑定在Cloudflare的域名，并且Cf为他生成了通配符证书，虽然很多人都说国内使用Cf Cdn会造成反向加速，但服务器在国外且在国内访问线路不稳定的套上Cf Cdn起码是可以实现访问稳定的，而且如果你的源服务器网络线路在国内够垃圾（比如像免费主机这种），套上不一定会反向加速（比方说免费主机标准在国内网络测试延时约260ms\~400ms，套上Cf Cdn后测试反而能到150ms\~250ms左右）

那么按照前边设定好了域名解析的话，Cf的Cname解析是可以开启CDN的，但这时我们不能开启，现在开了反而会导致网页访问出现问题，首先我们要去给免费主机上一个SSL证书（任何证书均可，自签名也可以）

这里推荐一个自签名证书生成地址：<https://www.ssleye.com/ssltool/self_sign.html

生成好自签名证书后，去主机面板SSL设置里给你绑定的域名绑定好证书 然后在Cf解析面板SSL设置那里，把模式调至“完全”，但不能开到最高的“严格”

[![bbd63f2b058d33a5adb83a5c4100bd62.md.png](https://s1.imagehub.cc/images/2023/02/05/bbd63f2b058d33a5adb83a5c4100bd62.md.png)](https://www.imagehub.cc/image/x12zb)

然后这时我们就可以打开Cf域名解析那里的CDN加速了，打开后等待一段时间CDN生效后访问界面即可看到已经是CF提供的免费通配符SSL了

个人示例地址：https://learn.takagia.top
