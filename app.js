Vue.component('greeting', {
    template: '<p>Hey there, Re-usable component, I am {{name}}. <button v-on:click="changeName">Change Name</button></p>.',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
})

new Vue({
    el: '#vue-app-one',

    methods: {

    },
    computed: {


    }

});

new Vue({
    el: '#vue-app-two',

    methods: {


    },
    computed: {

    }

});