<template lang="pug">
  .container
    el-row(:gutter="10")
      el-col(:xs="3" :sm="3" :md="3" :lg="3" :xl="3") 
        .container_menu
          Menu
      el-col(:xs="15" :sm="15" :md="15" :lg="15" :xl="15") 
        .container_left
          //- 文章页
          ArticleList(:list="articles")
      el-col(:xs="6" :sm="6" :md="6" :lg="6" :xl="6")
        .container_right
          //- 额外标注
          Additional
</template>

<script>
import Additional from '~/components/Additional'
import Menu from '~/components/Menu'
export default {
  layout: 'default',
  index:'my',
  head(){
    return {
      title:'我的记录'
    }
  },
  components:{
    Additional,
    Menu
  },
  asyncData(content){
    return content.$axios.get('api/articles?type=more&category=web&shown_offset=1600936156016479').then(res=>{
        return res.data
    })
    },
  methods:{
  },
  created(){
    
  }  

}
</script>

<style>

</style>