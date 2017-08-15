import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();
// import Ninjas from './Ninjas.vue'


// Vue.component('ninjas', Ninjas);

new Vue({
    el: '#app',
    render: h => h(App)
})