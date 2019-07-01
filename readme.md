## 项目描述
      该项目是一个 typescript + react + mobx + koa 编写的一个项目基本框架，用做脚手架的模板，项目模板会根据以后的技术更新进行持续更新。这是一个纯净的脚手架工具，不牵扯任何第三方的业务代码。

## 文件结构
```
public             --前端代码
├── node_modules   --公共依赖库
├── @types         --模块类型声明文件
├── build         --生成的打包文件
└── src            --源码目录
  ├── assets         --引用的静态文件
  ├── components   --复用业务组件
  ├── services     --ajax和后端接口封装
  ├── styles       --公共样式
  ├── views        --各个页面集合
  ├── utils        --公共方法
  ├── index.less   --入口样式文件
  └── index.tsx    --入口文件
server     --模拟服务（用于本地调试，自动构建忽略）
├── node_modules   --公共依赖库
├── router         --各个模块的模拟接口
├── config.ts      --入口样式文件
└── index.ts       --入口文件
```
## 运行步骤
    - 分别在public和server目录下执行 npm i 命令安装依赖
    - 在public目录下执行 npm run dev 或者 npm start 启动项目
    - 在server目录下执行 npm start 启动模拟服务

## 打包命令
    - 在public目录下执行 npm run build 命令，打包后的文件在public/build文件夹下