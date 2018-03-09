<template>
  <div id="app">
    
    <prayer></prayer>
    <review></review>

    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resentful: '',
      selfish: '',
      dishonest: '',
      afraid: '',
      apology: '',
      kept_to_ourselves: '',
      kind_and_loving: '',
      done_better: '',
      thinking_of_yourself: '',
      thinking_of_others: '',
      answer: {
        resentful: 'joe'
      },
    }
  }
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
  margin-bottom: 80px;
}
</style>
