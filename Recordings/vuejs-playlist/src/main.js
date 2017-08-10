import Vue from 'vue'
import App from './App.vue'
import Countries from './Countries.vue'
// import Ninjas from './Ninjas.vue'


// Vue.component('ninjas', Ninjas);
Vue.component('countries', Countries);
new Vue({
    el: '#app',
    render: h => h(App)
})