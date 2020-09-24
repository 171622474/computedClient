<template lang="pug">
  .container
    el-row(:gutter="10")
      el-col(:xs="18" :sm="18" :md="18" :lg="18" :xl="18") 
        .container_left
          ArticleList(:list="articles")
      el-col(:xs="6" :sm="6" :md="6" :lg="6" :xl="6")
        .container_right
          .introduce
            p 开发笔记 - computed.cn
            p 帮助自己
          .calendar
            Calendar
        
</template>

<script>
import ArticleList from '~/components/ArticleList'
export default {
  layout: 'default',
  name:'index',
  data(){
    return {
      title:'首页',
      date:new Date()
    }
  },
  head(){
    return {
      title:this.title
    }
  },
  components:{
    ArticleList,
  },
  asyncData(content){
    return content.$axios.get('api/articles?type=more&category=web&shown_offset=1600936156016479').then(res=>{
        return res.data
    })
    },
  created(){
  }

}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  .container_left{
    box-shadow: 0 2px 10px rgba(0,0,0,.06); 
    padding:15px;
  }
  .container_right{
    .introduce{
      height: 150px;
      padding:15px;
      box-shadow: 0 2px 10px rgba(0,0,0,.06); 
    }
    .calendar{
      box-shadow: 0 2px 10px rgba(0,0,0,.06); 
    }
  }
}
</style>
