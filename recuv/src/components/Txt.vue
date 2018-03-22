<template>
	<div>
		
		{{data}}  <br />
		<input v-if="boxtype" type="text"  :name="name" :style=" { fontSize: size + 'px', width: chars*10 + 'px' }" :placeholder="hold" class="experiment_text" />
		<textarea v-if="!boxtype"  :name="name" :style=" { fontSize: size + 'px', width: chars*10 + 'px', height:my_height + 'px' }" :placeholder="hold" class="experiment_text" />

		{{tall}}
		{{medium}}
		{{small}}

		
	</div>

</template>
<script>
	export default{
		props: 
			['chars', 'name', 'hold', 'data', 'size', 'it', 'tall', 'medium', 'small', 'baby'],
			computed: {
			  boxtype () {
			  	if (this.tall != null){
			  		this.my_height = 300;
			  	}else if(this.medium != null){
			  		this.my_height= 200;
			  	}else if(this.small != null){
			  		this.my_height= 100;
			  	}else if(this.baby != null){
			  		this.my_height=40
			  	}
			  	else{
			  		this.my_height = 200;
			  	}
			  	if (this.it == "text")
			    	return true;
			    else{
			    	return false;
			    }
			  }
			},
			data () {
			  return {
			    my_height:12
			  };
			}

	}
</script>