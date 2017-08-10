<template>
 <ul>
     <li v-for="country in countries" :key="country" > {{country}}</li>
</ul>   
</template>

<script>
export default {

  data () {
    return {
      countries:["Cuba", "Germany", "Canada"]
    }
  }
}
</script>

<style>

</style>
