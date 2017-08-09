<template>
  <div >
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
    
</template>

<script>
export default {

  data () {
    return {
      title:'Your first Vue File, woooo!'
    }
  },
  methods: {
    greeting: function(){
      return 'heeey cowboy';
    }
  }
}
</script>

<style>

</style>
