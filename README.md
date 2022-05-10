# 基于tailwindcss的一个博客样式网站

这个项目是一个基于tailwindcss与myddd-web结合的一个实现，是我在学习tailwindcss时的一个简易的实现。

## 什么是tailwindcss

tailwindcss是一种原子化CSS框架，是一个非常特别的CSS实现框架。

它非常适合非企业管理型的网站CSS选型，比如博客，个人产品介绍，官网等类似的网站。

## 示例项目说明

[在线demo](https://myddd.org/tailwindcss/)

tailwindcss实现了一个博客网站，本意是替换我的[微言码道](https://taoofcoding.tech)的样式，但实现后发现不是很喜欢，就放弃替换了。但把这个实现开源出来，做为一个示例还是不错的。

## 编译与开发

如果你是前端人员，下面的编译与开发的方式你应该非常熟悉

~~~shell
# 编译项目
npm i
# 运行与开发
npm run serve
# 构建生产包
npm run buildProd
~~~

## myddd-web

myddd-web是myddd在前端的领域驱动风格实现的模板式项目，在技术上它是由以下选择组成:

* 语言：TypeScript
* 框架： React
* 构建工具: WebPack + Swc 
* 单元测试: jest

更多关于myddd的信息，请访问[myddd官网](https://myddd.org)以了解更多。