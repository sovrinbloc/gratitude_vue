<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>


import DateNow from './DateNow.vue'
export default {

  name: 'app',
}
</script>

<style lang="scss">
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
  padding-bottom:30px;
  margin: 0 10px;
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
