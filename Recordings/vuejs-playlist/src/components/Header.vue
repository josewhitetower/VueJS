<template>
  <header >
      <h1 v-on:click="changeName">{{title}}</h1>
  </header>    
</template>

<script>

export default {
  props:{
    title:{
      type:String
    }

  },
  data () {
    return {
      title:'Vue Ninjas'
    }
  },
  methods:{
    changeName:function(){
      this.title="Vue Characters"
    }
  }
}
</script>

<style scoped>
 header{
     background: lightgreen;
     padding: 10px;
 }

 h1{
     color: #222;
     text-align: center;
 }
</style>
