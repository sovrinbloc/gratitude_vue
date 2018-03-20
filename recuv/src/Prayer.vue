<template>
	<div class="prayer">
	<h2>{{ prayer_head }}</h2>
		<p>{{ prayer_body }}</p>
	</div>
</template>
<script>
export default{

	props: ['prayernum'],
	computed: {
	  prayer_head () {
	  	var random_num = Math.floor(Math.random() * this.prayers.length)
	  	
	  	if (this.prayernum){
	  		random_num = this.prayernum
	  	} 
	  	this.prayer = this.prayers[random_num]
	  	this.prayer_title = this.prayer.title
	  	this.prayer_body = this.prayer.prayer
	    return this.prayer_title;
	  }
	},

	data () {
	  return {
	  	prayer: '',
	  	prayer_title: '',
	  	prayer_body: '', 
	    prayers:[

	    {
	    	title: 'Serenity Prayer', 
			prayer: 'God, grant me the Serenity, to accept the things I can not change, Courage to change the things I can, and Wisdom to know the difference.'
		}, 

		{
			title: 'Night Prayer',
			prayer: 'God forgive me where I have been resentful, selfish, dishonest or afraid today. Help me to not keep anything to myself but to discuss it all openly with another person - show me where I owe an apology and help me make it. Help me to be kind and loving to all people. Use me in the mainstream of life God. Remove worry, remorse or morbid (sick) reflections that I may be of usefulness to others. AMEN '
		},

		{
			title: 'Morning Prayer',
			prayer: 'God direct my thinking today so that it be divorced of self pity, dishonesty, self-will, self-seeking and fear. God inspire my thinking, decisions and intuitions. Help me to relax and take it easy. Free me from doubt and indecision. Guide me through this day and show me my next step. God give me what I need to take care of any problems. I ask all these things that I may be of maximum service to you and my fellow man in the name of the Steps I pray. AMEN '
		},

		{
			title: 'First Step Prayer',
			prayer: 'Dear Lord, I admitted that I was powerless over my addiction. I admitted that my life was unmanageable when I tried to control it. Remove from me all denial of my addiction.'
		},

		{
			title: 'Second Step Prayer',
			prayer: 'Heavenly Father, I know in my heart that only you can restore me to sanity. I humbly ask that you remove all twisted thought & Addictive behavior from me this day. Heal my spirit & restore in me a clear mind.'
		},

		{
			title: 'Third Step Prayer',
			prayer: 'God, I offer myself to Thee – to build with me and to do with me as Thou wilt. Relieve me of the bondage of self, that I may better do Thy will. Take away my difficulties, that victory over them may bear witness to those I would help of Thy Power, Thy Love, and Thy Way of Life.  May I do Thy will always!'
		},

		{
			title: 'Seventh Step Prayer',
			prayer: 'My Creator, I am now willing that you should have all of me, good and bad. I pray that you now remove from me every single defect of character which stands in the way of my usefulness to you and my fellows. Grant me strength, as I go out from here, to do your bidding.  Amen.'
		},

		{
			title: 'Eleventh Step Prayer',
			prayer: 'Lord, make me a channel of Thy peace; that where there is hatred, I may bring love; that where there is wrong, I may bring the spirit of forgiveness; that where there is discord, I may bring harmony; that where there is error, I may bring truth; that where there is doubt, I may bring faith; that where there is despair, I may bring hope; that where there are shadows, I may bring light. that where there is sadness, I may bring joy. Lord, grant that I may seek rather to comfort, than to be comforted; to understand, than to be understood; to love, than to be loved.  For it is by self forgetting, that one finds. It is by forgiving, that one is forgiven. It is by dying, that one awakens to Eternal Life. Amen.'
		},

		{
			title: 'The "Promises"',
			prayer: 'If we are painstaking about this phase of our development, we will be amazed before we are halfway through. We are going to know a new freedom and a new happiness. We will not regret the past nor wish to shut the door on it. We will comprehend the word serenity and we will know peace. No matter how far down the scale we have gone, we will see how our experience can benefit others. That feeling of uselessness and self pity will disappear. We will lose interest in selfish things and gain interest in our fellows. Self seeking will slip away. Our whole attitude and outlook upon life will change. Fear of people and of economic insecurity will leave us. We will intuitively know how to handle situations which used to baffle us. We will suddenly realize that God is doing for us what we could not do for ourselves. Are these extravagant promises? We think not! They are being fulfilled among us – Sometimes quickly, sometimes slowly. They will always materialize if we work for them. [From pages 83-84 in “The Big Book”]'
		},


	    ],
	  };
	}
}
</script>

Vue.use(require('vue-moment'));

