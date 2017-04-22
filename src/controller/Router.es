"use strict"

const Router = {
	index(){
		return async(ctx,next)=>{
			
			ctx.body = await ctx.render('index.swig',{
				title:'我很快很快就要入门啦~~'
			});
		}
	},

}

export default Router; 