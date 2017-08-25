export default {
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data) {
            this.blogs = data.body.slice(0, 10);
        })
    }
}