import Vue from 'vue'
import App from './App.vue'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//define your routes
const routes = []

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

// var review = require('/evening_review.js');








var v = new Vue({
  el: '#app',
  render: h => h(App)
})


