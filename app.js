new Vue({
    el: '#vue-app',
    data: {
        name: 'Jose',
        job: 'Ninja'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});