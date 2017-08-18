<template>
  <div >
      <form-helper>
        <h1 slot='title'>{{title}}</h1>
        <p slot ='text'>I am the paragraph of the slot</p> 
      </form-helper> 
      
  </div>    
</template>

<script>
import formHelper from './components/formHelper.vue';

export default {
  components:{
   'form-helper':formHelper
   },   
  data () {
   return{
      title:'I am a slot title' // The dynamic data must be defined where the component where the slot is created
   }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
