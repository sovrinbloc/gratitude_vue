<template>
<div>
<h1>Mental Movie Experiments</h1>
<h2>Quantum Field Collapse</h2>
<h3>Please fill out the information below. </h3>
<Txt name="title" chars="40" hold="Experiment Title" it="text" data="Title" />
<Txt name="prescription" chars="40" baby hold="3 times a day, morning, afternoon, and night. 3 minutes hypnosis, 10 minutes visualization." it="box" data="Experiment Length" />
<Txt name="description" chars="40" hold="Experiment Description" it="box" data="Description"  />
</div>
</template>

<script>
import Txt from '../Txt.vue';
export default{ 
	components: {
		Txt
	}

}
</script>