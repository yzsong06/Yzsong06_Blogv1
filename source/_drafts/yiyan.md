---
abbrlink: ''
categories: []
date: '2023-06-22T21:42:03.312153+08:00'
tags: []
title: 快速自建一个自己的“一言”
updated: 2023-6-22T21:47:27.436+8:0
---
如果你经常琢磨博客美化，那你一定知道著名的“一言”，它是一个小团队建立的项目，创始于2016年，目前版本是v1（https://v1.hitokoto.cn），相信你有时候也想通过这类接口来表达自己语言，但一言官方的部署教程比较繁琐，令人望而却步，好在我们也可以通过PHP，自建一个属于我们自己的，可自定义内容的简单的“一言”接口。

### 怎样实现？

首先，你需要有一台服务器或者虚拟主机，并不需要配置多么高，我们这里的“一言”只是一个PHP单文件实现的简单一言，只需要保证主机网络合适，以便处理网络请求。

第一步，创建对应的网址根目录。

这件事情应该并不困难，就是在你主机面板的文件管理器里，在类似wwwroot（EP和bt PHP面板常见）下新建一个目录即可。

第二步，在目录里创建一个index.php

第三步，在Index.php里填入以下代码

```PHP
<?php
//给你的API加一个验证锁
header("Access-Control-Allow-Origin: https://www.skyqian.com");

//获取“一言”文件的绝对路径
$path = dirname(__FILE__);
$file = file($path."/Yiyan.txt");

//随机读取一行
$arr  = mt_rand( 0, count( $file ) - 1 );
$content  = trim($file[$arr]);

//编码判断，用于输出相应的响应头部编码
if (isset($_GET['charset']) && !empty($_GET['charset'])) {
    $charset = $_GET['charset'];
    if (strcasecmp($charset,"gbk") == 0 ) {
        $content = mb_convert_encoding($content,'gbk', 'utf-8');
    }
} else {
    $charset = 'utf-8';
}
header("Content-Type: text/html; charset=$charset");

//格式化判断，输出js或纯文本
if ($_GET['format'] === 'js') {
    echo "function hitokoto(){document.write('" . $content ."');}";
} else {
    echo $content;
}
```

d
