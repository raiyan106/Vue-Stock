import './db.js';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {rtdbPlugin} from 'vuefire';
import {routes} from './routes';
import {storeData} from './store';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(rtdbPlugin);

const router = new VueRouter({
  routes,
  mode: 'history'
});

const store = new Vuex.Store(storeData);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
