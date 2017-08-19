<template>
  <div >
    <keep-alive> <!-- to kepp the data alive when you switch components-->
      <component v-bind:is="component"></component> 
    </keep-alive>
      <button v-on:click="component='form-one'">Show Form one</button>
      <button v-on:click="component='form-two'">Show Form two</button>
      
  </div>    
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components:{
   'form-one':formOne,
   'form-two':formTwo
   },   
  data () {
   return{
      component:'form-one' // The dynamic data must be defined where the component where the slot is created
   }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
