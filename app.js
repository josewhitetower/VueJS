new Vue({
    el: '#vue-app',
    data: {
        name: 'Jose',
        job: 'Ninja',
        website: 'https://github.com/josewhitetower',
        websiteTag: '<a href="https://github.com/josewhitetower">My Github</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});