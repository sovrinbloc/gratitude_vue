<template>
	<div>
		<input v-model="todo_temp" placeholder="Task" style="width:300px;">
		<input v-model="todo_time_temp" default="13:50" placeholder="7:30AM"> 
		<button v-on:click="add_todo()">Add To Do</button> 
		<ul>
			<li v-for="(todo, i) in todo_list">{{todo.objective}}, {{todo.time}}</li>
		</ul>
	</div>
</template>

<script>

export default {
	data () {
	  return {
	    todo_temp:'',
	    todo_time_temp: '',
	    todo_object_temp: '',
	    todo_list: [],	
	  };
	},
	methods: {
	  add_todo () {
	  	this.todo_object_temp = {objective: this.todo_temp, time: this.todo_time_temp};
		this.todo_list.push(this.todo_object_temp);
		this.todo_temp = "";
		this.todo_object_temp = "";
		this.todo_time_temp = "";
	  }
	},
	computed: {
	  time_conversion () {
	    return true;
	  }
	}
};

</script>