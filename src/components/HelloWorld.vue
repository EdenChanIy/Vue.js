<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input v-model="newItem" @keyup.enter="addNew" />
    <ul>
      <li v-for="item in items"
      		v-bind:class="{finished:item.isFinished}"
      		v-on:click="toggleFinished(item)">
        		{{item.lable}}
        	<button v-on:click="deleteItem(item)">{{ delete_ }}</button>
        	<hr/>
      </li>
    </ul>
  </div>
</template>

<script>
	
import Store from '@/js/store'
var initItems=Store.fetch();
//console.log(initItems);
export default {
  name: 'hello',
  data:function(){
  	return {
  		title:'This is a toDoList.',
  		items:initItems,
  		newItem:' ',
			delete_:'删除'
  	}
  },
  watch:{
  	items:{
  		handler: function(items){
  			Store.save(items);
  		},
  		deep:true
  	}
  },
  methods:{
  	toggleFinished:function(item){
  		item.isFinished=!item.isFinished;
//		console.log(item.isFinished);
  	},
  	addNew:function(){
  		this.items.push({
  			lable:this.newItem,
  			isFinished:false
  		});
  		this.newItem='';
  	},
  	deleteItem:function(item){
//		console.log(this.items.indexOf(item));
  		this.items.splice((this.items.indexOf(item)), 1);
//		Store.save(this.items);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
button{
	margin:10px;
}
.finished{
	color: #ccc;
}
a {
  color: #42b983;
}
</style>
