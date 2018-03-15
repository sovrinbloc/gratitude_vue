import Vue from 'vue'
import App from './App.vue'

//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes

import Hello from './components/Hello.vue'
import About from './components/About.vue'


import EveningReview from './Evening-Review.vue'
import Prayer from './Prayer.vue'
import ToDoList from './ToDoList.vue'
import GratitudeList from './GratitudeList.vue'
import MorningReview from './Morning-Review.vue'

const routes = [
	{path: '/', component: Hello},
	{path: '/about/', component: About},
	{path: '/review/evening/', component: EveningReview},
	{path: '/review/morning/', component: MorningReview},
	{path: '/prayer/thirdstep', component: Prayer},
	{path: '/list/todo', component: ToDoList},
	{path: '/list/gratitude', component: GratitudeList},
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

// var review = require('/evening_review.js');

Vue.use(require('vue-moment'));







var v = new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')


