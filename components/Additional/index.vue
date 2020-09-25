<template lang="pug">
    div
        .introduce
            el-alert.mb10(title="开发笔记 - computed.cn",:closable="false")
            el-alert.mb10(title="帮助自己 - 好记性不如烂键盘",:closable="false")
            el-alert.mb10(title="每日一记 - 归纳总结",:closable="false")
            el-alert(title="每日难题 - 技术发现",:closable="false")
        .calendar.mt10
            Calendar    
</template>

<script>
import ArticleList from '~/components/ArticleList'
// 右侧板块
export default {
    components:{
        ArticleList
    }
}
</script>

<style lang="scss" scoped>
    .introduce{
    //   height: 150px;
      padding:15px;
      box-shadow: 0 2px 10px rgba(0,0,0,.06); 
    }
    .calendar{
      box-shadow: 0 2px 10px rgba(0,0,0,.06); 
    }
</style>