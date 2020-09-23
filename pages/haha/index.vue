<template>
  <div>
    <h1 v-for="(item,index) in  letterMap" :key="index">
      <p v-for="(items,indexs) in  item" :key="indexs">
        {{items.chineseFullnm}}
      </p>
    </h1>
  </div>
</template>

<script>

export default {
  data(){
    return {
      list:[]
    }
  },
  async asyncData(context){
    // https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0
    // return {
    //   haha:'shabi'
    // }
    return context.$axios.get('ajax/cities').then(res=>{
      console.log(res.data);
      return res.data
    })
  }
}
</script>

<style>

</style>