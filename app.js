new Vue({
    el: '#vue-app',
    data: {
        output: '',
        output1: ''
    },

    methods: {
        readRefs: function() {

            console.log(this.$refs);

            this.output = this.$refs.input.value;
            this.output1 = this.$refs.test.innerText;

        }

    },
    computed: {


    }

});