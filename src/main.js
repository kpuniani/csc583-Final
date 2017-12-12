// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import showAllUsers from './components/ShowAllUsers.vue';
import register from './components/Register.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'jquery/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/scrollspy.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter)
Vue.use(BootstrapVue);

var router =  new VueRouter({
    routes: [
        {
            path: '/',
            name: 'register',
            component: register
        },
        {
            path: '/showUsers',
            name: 'showallusers',
            component: showAllUsers
        }
    ], mode:"history"
})

const regapp = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
regapp.$mount('#app')
