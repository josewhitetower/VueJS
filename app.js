new Vue({
    el: '#vue-app',
    data: {
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25, city: "NY" },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 },

        ]

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