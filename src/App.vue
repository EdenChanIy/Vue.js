<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <component-a msgFromFather="Hi Son!" v-on:sonTellsMe="listenToMySon"></component-a>
    <p>The son tells me:{{sonWords}}</p>
  </div>
</template>

<script>
import componentA from '@/components/componentA'
export default {
  name: 'app',
  data:function(){
  	return {
  		sonWords:''
  	}
  },
  components:{componentA},
  methods:{listenToMySon:function(msg){
  	this.sonWords = msg;
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
