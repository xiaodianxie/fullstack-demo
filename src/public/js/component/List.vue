<template>
	<div>
	    <ul v-for='el in data'>
	    	<li class='item' @click='clickItem(el)'>{{el.title}}</li>
	    </ul>	
	   
	</div>

</template>
<script type="text/javascript">
	import axios from "axios";
	export default{
		data(){
			return {
				data:[]
			}
		},
		created(){

			axios.get('/get').then((rsp)=>{
				this.data = rsp.data.data;
			});

			
		},
		methods:{
			clickItem(title){
				this.$emit("clickListItem",title);
			},
			saveDiary(title,content){
				this.data.every((v,i)=>{
					
					if(v.title == title){
						
						v.desc = content;
						return false;
					}
					return true;
					
				});
				
			},
			addDiary(title,desc){
				this.data.push({title,desc});
			}
		}
	}
</script>

<style scoped land='stylus'>
.item{
	cursor: pointer;
	background: yellow;
	width:300px;
}
</style>
