<template>
  <div >
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <countries></countries>
  </div>
    
</template>

<script>
import Ninjas from './Ninjas.vue'
// import Countries from './Countries.vue'

export default {
  components:{
    'ninjas': Ninjas
  },
  data () {
    return {
      title:'Ninja App'
    }
  }
}
</script>

<style>

</style>
