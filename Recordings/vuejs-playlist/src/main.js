import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export const bus = new Vue();
// import Ninjas from './Ninjas.vue'
Vue.use(VueResource);

// Vue.component('ninjas', Ninjas);

new Vue({
    el: '#app',
    render: h => h(App)
})