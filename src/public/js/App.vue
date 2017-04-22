<template>
    <div id="app">
    	<List @clickListItem="clickListItem" ref='List'></List>
    	<Diary :source="source" v-if='showDiaryContent'></Diary>
    	<markdownEditor v-if='!showDiaryContent' class='editor' v-model="content" ref="markdownEditor"></markdownEditor>
    	<button @click='clickButton'>{{buttonContent}}</button>
    	<!--new-->
    	<br />
    	<p style="margin-top:30px;">新建日记</p>
    	<label>请输入新日记标题：<input type='text' v-model='newDiary'></label>
    	<br />
    	<button @click='createDiary'>确定</button>
    	<!--new-->		
    </div>
</template>
<script type="text/javascript">
	import "../style/index.styl";
	import List from "./component/List";
	import Diary from './component/Diary';
	import { markdownEditor } from 'vue-simplemde';
	import 'simplemde/dist/simplemde.min.css';
	import axios from "axios";

	export default{
		data(){
			return {
				diaryTitile:'',
				content:'',
				source:"You didn't select a diary!",
				showDiaryContent:true,
				newDiary:""
			}
		},
		computed:{
			buttonContent(){
				return this.showDiaryContent?"编辑日记":"保存修改"
			}
		},
		components:{
			List,
			Diary,
			markdownEditor
		},
		methods:{
			clickListItem(diary){

				this.diaryTitile = diary.title;
				this.source = diary.desc;
				this.content = diary.desc;
				this.showDiaryContent = true;
			},
			clickButton(){
				//说明还没有选中其中一篇日记咯
				if(this.diaryTitile == ""){
					return false;
				}
				switch(this.buttonContent){
					case '编辑日记':{
						this.editDiary();
						break;
					}
					case '保存修改':{
						this.saveDiary();
						break;
					}
				}
				
			},
			/***new***/
			createDiary(){
				var title = this.newDiary;
				console.log(title);
				axios.get('/new',{title}).then((res)=>{
					if(res.data.code == 0){
						//新建成功
						this.$refs.List.addDiary(title,"还没有开始写日记");
					}
				});
			},
			/***new***/
			editDiary(){
				this.showDiaryContent = false;
			},
			saveDiary(){
				let title = this.diaryTitile;
				let content = this.content;
				
				axios.get('/save',{title,content}).then((res)=>{
					if(res.data.code==0){
						//保存成功显示最新的日记内容，但日记内容是存储在List组件中的，这就坑爹了，意味着要在这父组件修改子组件List的数据
						this.$refs.List.saveDiary(title,content);
						this.source = this.content
						this.showDiaryContent = true;
					}
				})				
			}
		}
	}
</script>

<style>
.editor{
	width:700px;
	height: auto;
}
.CodeMirror{
	min-height: 300px!important;
	height:300px!important;
}
html,body{
	height:100%;
}
#app{
	height:100%;
}
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0;}
body,input,textarea,select,button,table{border-collapse:collapse;border-spacing:0;}

h1,h2,h3,h4,h5,h6{font-size:100%;}
img,fieldset{border:0 none;}
ul,ol,li{list-style:none;}
em,address{font-style:normal;}
table{border-collapse:collapse;}
em,i{font-style:normal;}
strong,b{font-weight:normal;}
img{border:none;}
input,img{vertical-align:middle;}
input{outline:none;}
*{-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
textarea:focus{outline:0;}
a{text-decoration:none;}
.clearfix:after{display:block;clear:both;visibility:hidden;height:0;content:" ";font-size:0;}
.clearfix{*zoom:1;}
</style>
