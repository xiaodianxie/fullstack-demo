import Koa from 'koa';
import Router from 'koa-simple-router';
import co from 'co';
import convert from 'koa-convert';
import serve from 'koa-static';
import render from 'koa-swig';
import path from 'path';
import 'babel-core/register';
import 'babel-polyfill';

const app = new Koa();					//Koa实例对象

//路由初始化
/*+++++++++++++++++++++++++++++++++++++++*/
import controllerInit from './controller/init';
controllerInit.init(app, Router);
/*+++++++++++++++++++++++++++++++++++++++*/


//模板配置	
app.context.render = co.wrap(render({
	root: path.join(__dirname,'./view/'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'swig',
    writeBody: false	
}));


//服务文件位置
app.use(convert(serve(path.join(__dirname,'./public'))));

app.listen(3020);						//监听localhost的3020端口		

export default app;