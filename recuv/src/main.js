import Vue from 'vue'
import App from './App.vue'

//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//define API configuration
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(require('vue-moment'));

Vue.router = new VueRouter
//define your routes
const routes = [
	{path: '/', component: Hello},
	{path: '/about/', component: About},
	{path: '/review/evening/', component: EveningReview},
	{path: '/review/morning/', component: MorningReview},
	{path: '/prayers', component: Prayer},
	{path: '/list/todo', component: ToDoList},
	{path: '/list/gratitude', component: GratitudeList},
	{path: '/api/gratitude', component: GratitudeAPI},
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = 'http://local.clientreachapi.com:8080/oauth/v2/token';
Vue.axios.defaults.baseURL = 'http://local.clientreachapi.com:8080/home';

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});
//end config API configuration


import Hello from './components/Hello.vue'
import About from './components/About.vue'

import EveningReview from './Evening-Review.vue'
import Prayer from './Prayer.vue'
import ToDoList from './ToDoList.vue'
import GratitudeList from './GratitudeList.vue'
import MorningReview from './Morning-Review.vue'
import GratitudeAPI from './GratitudeAPI.vue'



// var review = require('/evening_review.js');








new Vue({
  el: '#app',
  router,

  render: h => h(App),
}).$mount('#app')




