<template>
	<div>
		<input v-model="todo_temp"> <button v-on:click="add_todo()">Add To Do</button> 
		<ul>
			<li v-for="todo in todo_list">{{todo}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
	  return {
	    todo_temp:'',
	    todo_list: [],	
	  };
	},
	methods: {
	  add_todo () {
		this.todo_list.push(this.todo_temp);
		this.todo_temp = "";
	  }
	}
};

</script>