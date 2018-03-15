<template>
  <div id="app">
    
    <Prayer />
    <EveningReview />
    <ToDoList />
    <GratitudeList />

    
  </div>
</template>

<script>

import EveningReview from './Evening-Review.vue'
import Prayer from './Prayer.vue'
import ToDoList from './ToDoList.vue'
import GratitudeList from './GratitudeList.vue'
export default {
  components: {
    EveningReview, Prayer, ToDoList, GratitudeList
  },
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

ul {
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

a {
  color: #42b983;
}

.question{
  margin-bottom: 20px;
}
</style>
