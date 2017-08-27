<template>
  <div v-theme:column="'narrow'" id="show-blogs" > <!--it has to be a string " '' "-->
   <h1>All Blog Articles</h1>
   <input id ="search"type="text" v-model="search" placeholder="search blog">
   <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
      <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
       <article>{{blog.content|snipped}}</article>
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
      this.$http.get("https://jt-vue-blog.firebaseio.com/posts.json").then(function(data){
         return data.json();
      }).then(function(data){
          var blogsArray=[];
          for(let key in data){
              data[key].id=key;
              blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
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
    min-width: 800px;
     padding: 10px;
   
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
    div.single-blog a {
    text-decoration: none;
    }
</style>
