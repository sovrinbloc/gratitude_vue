<template>
	<div>
		<Prayer prayernum="2" />
		
		<Prayer prayernum="3" />
		<Prayer prayernum="4" />
		<Prayer prayernum="5" />
	<h1>{{m.title}}</h1>
	<button v-on:click="toggleReading()">View Full Page 86 Reading</button>
	<div v-if="view_reading">
		<p>{{m.content_intro}}</p>
		<p>{{m.conclusion}}</p>
	</div>

	<p>{{m.before_todo}}</p>
	<h3>Consider Your Plan for the 24 Hours Ahead</h3>

	<p class="tips">{{m.ask_yourself_each_todo}}</p>
	<ol>
		<li class="slick tips" v-for="(q, index, i) in m.before_todo_questions">{{index+1}}. {{q.question}}</li>
	</ol>
	<p>{{m.indecision}}</p>
	<p>{{m.relax}}</p>
	<ToDoList />
	<p>{{m.conclusion_short}}</p>	
	</div>
</template>
<script>
import ToDoList from './ToDoList.vue'
import Prayer from './Prayer.vue'
export default{
	components: {
		ToDoList,
		Prayer
	},
	data () {
	  return {
	  	m: morning_review,
	  	view_reading: 0,
	  };
	},
	methods: {
	  toggleReading () {
	  	this.view_reading = this.view_reading > 0 ? 0 : 1;
	  }
	}

}
</script>
