import Mock from "mockjs";

Mock.mock("/new",{
	code:0,
	desc:"新建成功"
})
.mock("/save",{
	code:0,
	desc:"保存成功"
})
.mock("/get",{
	code:0,
	data:[{title:"第一篇日记",desc:"#第一篇日记"},{title:"第二篇日记",desc:"##第二篇日记"},{title:"第三篇日记",desc:"###第三篇日记"}]
});