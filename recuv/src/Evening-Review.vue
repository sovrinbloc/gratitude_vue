<template>
	<div class="prayer">
		<Prayer prayernum="1" />
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
			<textarea v-if="(checked[index] != '' && checked[index] != !question.show || question.show == -1) && i != 0"  cols='100' rows='5' v-model="answer[index]"></textarea>
			<textarea v-if="(checked[index] != '' && checked[index] != !question.show || question.show == -1) && i == 0"  cols='20' rows='5' v-model="answer[index].who" placeholder="Who"></textarea> 
			<textarea v-if="(checked[index] != '' && checked[index] != !question.show || question.show == -1) && i == 0"  cols='30' rows='5' v-model="answer[index].offense" placeholder="The Offense"></textarea> 
			<textarea v-if="(checked[index] != '' && checked[index] != !question.show || question.show == -1) && i == 0"  cols='30' rows='5' v-model="answer[index].affects" placeholder="What did it affect?"></textarea> 
			<textarea v-if="(checked[index] != '' && checked[index] != !question.show || question.show == -1) && i == 0"  cols='30' rows='5' v-model="answer[index].mypart" placeholder="What was your part?"></textarea> 

		</li>
		
		
	</ul>
	<h3>{{review_conclusion}}</h3>
	<button>Submit</button>


	</div>
</template>

<script>
		import Prayer from './Prayer.vue'

	export default{
		components: {
			Prayer
		},
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

	  };
	},
};
</script>