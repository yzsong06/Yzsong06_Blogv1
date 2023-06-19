import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "返回博客",
    link: "https://www.takagi.icu",
    icon: "home",
  },
  {
    text: "文档站导航",
    icon: "book",
    prefix: "/",
    children: ["main/"],
  },
  {
        text: "博客站导航",
        icon: "blog",
        children: [
          {
            text: "友情链接",
            icon: "link",
            link: "https://www.takagi.icu/links"
          },
          {
            text: "个人追番",
            icon: "bilibili",
            link: "https://www.takagi.icu/bilibili"
          },
          {
            text: "关于我",
            icon: "address-card",
            link: "https://www.takagi.icu/about"
          },
          {
            text: "赞助我",
            icon: "credit-card",
            link: "https://www.takagi.icu/pay"
          },
        ]
  },
]);
