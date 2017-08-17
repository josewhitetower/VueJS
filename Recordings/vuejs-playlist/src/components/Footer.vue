<template>
<footer>
    <p>{{copyright}} {{title}}</p>
</footer>
</template>

<script>
import {bus} from '../main';
export default {
    // props:{
    //     title:{
    //         type:String
    //     }
    // },
  data () {
   return{
    copyright:'Copyright 2017 José Torreblanca',
    title:'Vue Ninjas'
   }
  },
  created(){
      bus.$on('titleChanged',(data)=>{ //It has to be a ()=> function, otherwise it won't work...why?
          this.title=data;
      })
  }
}
</script>

<style scoped>
    footer{
        background: #222;
        padding:6px;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>
