<template>
	<div>
		<p class='markdown'>**********日记内容*begin***********</p>
	    <VueMarkdown :source="source"></VueMarkdown>	
	    <p class='markdown'>**********日记内容*end***********</p>
	</div>

</template>
<script type="text/javascript">
	import VueMarkdown from "vue-markdown";

	export default{
		data(){
			return {}
		},
		components:{
			VueMarkdown
		},
		props:["source"]
	}
</script>

<style scoped land='stylus'>
.markdown{
	margin:10px 0;
}
</style>
