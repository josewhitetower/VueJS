<template>
  <div v-theme:column="'narrow'" id="show-blogs" > <!--it has to be a string " '' "-->
   <h1>List Blog Titles</h1>
   <input id ="search"type="text" v-model="search" placeholder="search blog">
   <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
       <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
  </div>
  </div>    
</template>

<script>

import searchMixin from '../mixins/searchMixin.js';
export default {
 
  data () {
   return{
      blogs:[],
      search:''
   }
  },
  methods:{
    
  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
         this.blogs=data.body.slice(0,10);
      })
  },
  computed: {
    
  },
  filters:{
      toUppercase(value){ //it comes from to-uppercase
          return value.toUpperCase();
  },
      snipped(value){
       return value.slice(0,100)+' ...';
   }

        
},
 directives:{
     'rainbow': {
    bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
    }
 }
 },
 mixins:[searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
#search{
    box-sizing: border-box;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
