<template>
  <div >
    <add-blog></add-blog>
    <show-blog></show-blog>
    <list-blogs></list-blogs>
  </div>    
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';


export default {
  components:{
  'add-blog':addBlog,
  'show-blog':showBlog,
  'list-blogs':listBlogs
  },
  data () {
   return{
      
   }
  },
  methods:{
    
  }
}
</script>

<style>
 body{
   margin: 0;
   font-family: 'Nunito Semibold'
 }
</style>
