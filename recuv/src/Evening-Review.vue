<template>
	<div class="prayer">

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
	</div>
</template>

<script>
	export default{
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