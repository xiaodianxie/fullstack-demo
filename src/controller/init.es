import Router from "./Router";

const controllerInit = {
	init(app,router){
		app.use(router(_=>{
			//首页的渲染
			_.get('/index', Router.index())

		}))
	}
}

export default controllerInit;