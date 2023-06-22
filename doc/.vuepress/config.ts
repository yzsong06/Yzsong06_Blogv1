import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  dest: "./public/docs",
  lang: "zh-CN",
  title: "一只鬆的文档站",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
