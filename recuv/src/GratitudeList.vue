<template>
	<div>
		I am grateful <input class="gratitude_box" v-model="gratitude_temp" > 
		<button style="font-size: 14px;" v-on:click="add_gratitude()">Add Gratitude</button> 
		<ol>
			<li v-for="(grateful, index, i) in gratitude">{{index+1}}. {{grateful}}</li>
		</ol>
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
		this.gratitude.push("I am grateful " + this.gratitude_temp);
		this.gratitude_temp = "";
	  }
	}
}
</script>