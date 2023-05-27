---
abbrlink: 7b063777
categories:
- - 建站思路
date: '2023-04-19 20:00:00'
tags: []
title: Hexo使用Github Action实现持续集成
updated: Thu, 20 Apr 2023 02:57:02 GMT
---
### 前言

作为一个高木粉，我买入了takagi.icu这个域名并且建立了博客，但毕竟域名要按用途来用，将来这个域名肯定不会一直是博客。同时作为一个学生党，这个域名能不能保持续订也是一个问题。所以我决定在GitHub上利用GitHub的二级域名建一个稳定能存在的博客，虽然国内访问不一定快，但胜在一直都有。

但是，如果采用传统方法推送博客到GitHub站点仓库的话，这意味我需要每次更新博客都需要重新Git推送站点。

当然，这对于本地md文件写博客的人来说倒也没什么。但不幸的是，我自建了Qexo作为在线编辑器，显然传统的部署方式肯定是不行的。在之前，我一直发愁这个问题。

直到后来我在用GitHub Action来续订微软e5的时候突然才想起不是还有这东西么，于是去用它建立了一个全自动部署的GitHub托管站点。

站点地址：https://yzsong06.github.io

### Step.1 本地运行检查

在进行部署之前，首先我们要确保站点本地是能顺利运行并且能够生成正常的静态站点文件。

部署一个Hexo博客（部署Hexo请参考Hexo.io的官方文档）

部署完成后，在站点根目录下运行如下指令（指令可简写为 hexo s）

```bash
hexo server
```

访问http://localhost:4000后，在确保站点能够顺利正常显示内容并且运行正常后，再运行如下指令检查站点静态文件是否生成正常（hexo clean不可简写，但hexo generate可简写为 hexo g）

```bash
hexo clean && hexo generate
```

如果能够生成正常，再运行一次 hexo clean清除静态文件，本地运行检查步骤就完成了。

### Step.2 配置文件

关于如何将仓库上传至GitHub，请自行查询资料，此处只介绍上传后的相关配置

首先先确认Hexo的配置文档config.yml有如下配置

```bash
deploy:
  type: git
  repository: git@github.com:yzsong06/Demo.git
  branch: main
```

> 此处Repository请自行设置为你的GitHub Pages仓库，例如xxx.github.io 注意使用SSH地址！

### Step.3 生成密钥

**对于一些用户……**

- 对于Windows10用户，可在Store商店安装Ubuntu
- 对于安卓用户，可安装Termux并安装OpenSSH
- 对于Linux用户，呃……你都用Linux了应该懂（Doge）

```bash
ssh-keygen -t rsa -b 4096 -C "Hexo Deploy Key" -f github-deploy-key -N ""
```

这将会在当前目录生成两个文件：
github-deploy-key —— 私钥

github-deploy-key.pub —— 公钥

我们把**私钥**放到我们存放 Hexo 原始文件的代码仓库里面，用于触发 Actions 时使用。
把**公钥**放到 GitHub Pages 对应的仓库里面，并开启Action的写入权限，用于 Hexo 部署时的写入工作。

**配置私钥**：

1. 在 GitHub 上打开保存 Hexo 的仓库，访问 **Settings -> Secrets -> New secret**
2. 然后在名字（**Name**）部分填写：**HEXO_DEPLOY_KEY**
   ，一定要注意**大小写**，这个后面的 **GitHub Actions**  用的到，一定不能写错。
3. 然后在 **Value** 的部分填入 **github-deploy-key** 中的内容

**配置公钥：**

1. 接下来我们需要访问存放网页的仓库，也就是 Hexo 部署以后的仓库，比如：Username.github.io 这种，访问 **Settings -> Deploy keys**
2. 按 **Add deploy key** 来添加一个新的公钥
3. 在 Title 中输入：**HEXO_DEPLOY_PUB** 字样，当然也可以填写其它自定义的名字，这里只是备注。
4. 在 Key 中粘贴 **github**-deploy-key.pub 文件的内容
5. 勾选 **Allow write access** 来打开写权限，否则会无法写入仓库导致部署失败

### Step.4 建立Workflow

首先在 Hexo 的仓库中创建一个新文件 **.github/workflows/push.yml**
，文件名可以自己取，但是一定要放在

 **.github/workflows**目录下，也可使用**Action**的新建功能建立文件，文件内容如下

```bash
name: 部署站点

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x]

    steps:
      - uses: actions/checkout@v1

      - name: 设置为 Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: 配置环境变量
        env:
          HEXO_DEPLOY_PRI: ${{secrets.HEXO_DEPLOY_PRI}}
        run: |
          mkdir -p ~/.ssh/
          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name "yzsong06"
          git config --global user.email "yzsong06@outlook.com"
      - name: 安装部署时运行环境
        run: |
          npm i -g hexo-cli
          npm i hexo-deployer-git --save
          npm i
      - name: 生成站点静态文件
        run: |
          hexo clean && hexo generate
      - name: 使用hexo-deployer部署站点
        run: |
          hexo deploy
```

### Step.5 完成

接下来保存文件后一般即可在仓库的Action页面看到反馈结果了，Job出现绿色对号即为部署成功！
