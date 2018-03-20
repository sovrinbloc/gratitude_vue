<template>
  <div id="app">

    <router-link v-bind:to="'/'" class="router-link">Home</router-link>
    <router-link v-bind:to="'/about'" class="router-link">About</router-link>
    <router-link v-bind:to="'/list/todo'"class="router-link">ToDo List</router-link>
    <router-link v-bind:to="'/list/gratitude'"class="router-link">Gratitude List</router-link>
    <router-link v-bind:to="'/review/morning'"class="router-link">Morning Review</router-link>
    <router-link v-bind:to="'/review/evening'"class="router-link">Evening Review</router-link>
    <router-link v-bind:to="'/prayers'"class="router-link">Prayers</router-link>
    <router-link v-bind:to="'/api/gratitude'"class="router-link">Gratitude API</router-link>

    <router-view></router-view>
    <Prayer />

  </div>
</template>

<script>

import Prayer from './Prayer.vue'

import DateNow from './DateNow.vue'
export default {
  components: {
    Prayer,
  },
  name: 'app',
}
</script>

<style lang="scss">

.router-link{
  padding-right:10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}


li {
  /*display: inline-block;*/
  padding-bottom:4px;
  margin: 0 10px;
}

.gratitude_box{
  width: 300px;
  font-size: 14px;
}

.prayer {
	display:block;
	margin-left: auto;
	margin-right: auto;
	width:800px;
}

.slick{
  display: inline-block;
  padding-bottom:5px;
  margin: 2px 10px 2px 10px;
} 

.tips{
  color: #666;
  font-size: 12px;
}

a {
  color: #42b983;
}

.question{
  margin-bottom: 20px;
}
</style>
