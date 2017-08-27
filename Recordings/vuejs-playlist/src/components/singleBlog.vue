<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <p>Autor: {{blog.author}}</p>
      <ul>
          <li v-for="cat in blog.categories" :key="cat">{{cat}}</li>
      </ul>
</div> 
</template>

<script>
 export default {
     data(){
         return {
             id:this.$route.params.id,
             blog:{}
         }
     },
     created(){
         this.$http.get('https://jt-vue-blog.firebaseio.com/posts/'+ this.id+'.json').then(function(data){
            return data.json();
           
         }).then(function(data){
             this.blog=data;
         })
     }
 }
</script>

<style scoped>
#single-blog{
 max-width: 960px;
 margin: auto;
}

</style>