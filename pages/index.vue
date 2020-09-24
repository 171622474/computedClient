<template lang="pug">
  .container
    h1(v-for="item in 100",:key="item") {{item}}
</template>

<script>
export default {
  layout: 'default',
  name:'index',
  data(){
    return {
      title:'首页'
    }
  },
  head(){
    return {
      title:this.title
    }
  }

}
</script>

<style>

</style>
