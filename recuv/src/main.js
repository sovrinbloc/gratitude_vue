import Vue from 'vue'
import App from './App.vue'
// var review = require('/evening_review.js');

Vue.component('gratitude-list', {
	template: 
	`
	<div>
		<input v-model="gratitude_temp"> <button v-on:click="add_gratitude()">Add Gratitude</button> 
		<ul>
			<li v-for="grateful in gratitude">{{grateful}}</li>
		</ul>
	</div>
	`,
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
});

Vue.component('todo-list', {
	template: 
	`
	<div>
		<input v-model="todo_temp"> <button v-on:click="add_todo()">Add To Do</button> 
		<ul>
			<li v-for="todo in todo_list">{{todo}}</li>
		</ul>
	</div>
	`,
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
});

Vue.component('prayer', {
	template: `<div class="prayer">
	<h2>Third Step Prayer</h2>
<p>God, I offer myself to Thee - To build with me and to do with me as Thou wilt. 
Relieve me of the bondage of self, that I may better do Thy will. 
Take away my difficulties, that victory over them may bear witness 
to those I would help of Thy Power, Thy Love, and Thy Way of life. 
May I do Thy will always!</p></div>`,

});

Vue.component('review', {
	template: `<div class="prayer">

	<h2>{{review_title}}</h2>
	<h3>When we retire at night, we constructively review our day.</h3>
	<h4>{{no_worry}}</h4>
	<ul>
		<li  v-for="(question, index, i) in review_questions">{{i + 1}}: {{question.q}} 

		<form v-if="question.show != -1">
			<input type="radio" value="1" v-model="checked[index]">Yes
			<input type="radio" value="0" v-model="checked[index]">No
		</form>
		<label class="question" v-if="checked[index] != '' && checked[index] != !question.show || question.show == -1" ><h5>Notes / Details: </h5></label>
			<textarea v-if="checked[index] != '' && checked[index] != !question.show || question.show == -1"  cols='100' rows='5' v-model="answer[index]"></textarea> </li>
		
	</ul>
	<h3>{{review_conclusion}}</h3>
	<button>Submit</button>
	</div>`,
	data () {
  return {
    review_title: review.title,
    no_worry: review.no_worry,
    review_questions: review.questions,
    review_conclusion: review.conclusion,
    answer: { 
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
    },
    checked: { 
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
    },

    msg: 'test',

  };
},
});

var v = new Vue({
  el: '#app',
  render: h => h(App)
})


