new Vue({
    el: '#vue-app',
    data: {
        error: false,
        sucess: false

    },
    methods: {
        // addToA: function() {
        //     return this.a + this.age;
        // },
        // addToB: function() {
        //     return this.b + this.age;
        // }

    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }

});