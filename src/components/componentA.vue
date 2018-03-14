<template>
	<div>
		<h1>{{title}}</h1>
		<h1>{{msgFromFather}}</h1>
		<button v-on:click="clickComponetA()">Click me!</button>
		<button v-on:click="tellFather()">Tell my father!</button>
	</div>
</template>

<script>
	export default{
		name:'hello',
		data:function(){
			return{
				title:'Hello from component A',
				msg:''
			}
		},
		watch:{
			
		},
		props:['msgFromFather'],
		methods:{
			clickComponetA:function(){
				alert(this.msgFromFather);
			},
			tellFather:function(){
				this.msg="Hi Father!";
				this.$emit('sonTellsMe', this.msg);
			}
		}
	}
</script>

<style scoped>
	a{color:#42B983;}
</style>