<template>
	<div>
		<input v-model="gratitude_temp"> <button v-on:click="add_gratitude()">Add Gratitude</button> 
		<ul>
			<li v-for="grateful in gratitude">{{grateful}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	data () {
	  return {
	    gratitude_temp:'',
	    gratitude: [],	
	  };
	},
	methods: {
	  add_gratitude () {
		this.gratitude.push(this.gratitude_temp);
		this.gratitude_temp = "";
	  }
	}
}
</script>