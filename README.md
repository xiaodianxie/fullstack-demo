# 全栈小demo

### 用于入门全栈的小demo
######功能包括：
- 新建日记
- 编辑日记：使用vue-simplemde组件
- 获取日记列表：使用vue-markdown组件编译md语法文件

######思路：
- gulp编译后端资源，webpack编译前端资源
- koa2编写服务，nodemon启动服务
- mockjs模拟后台数据
- vue实现前端页面
- mongodb操作数据库（未实现）
- mocha测试接口（未实现）

###使用到的技术
- webpack gulp
- vue
- axios
- mockjs
- koa
- es6,es7
- mocha(还没实现)
- mongodb(还没有实现)
- 后端数据用mock.js模拟，数据库操作与服务端接口测试还没有写

###运行顺序
- npm install
- npm run dev
- npm run ser
- 打开localhost:3020/index
- 我的node版本6.9.4，如果报错可以切一下node版本
