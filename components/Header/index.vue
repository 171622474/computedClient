<template lang="pug">
  .header
    el-row(type="flex" justify="space-between" align="middle").header_nav
      el-col.logo(:span="4") 
        span computed
        span .cn
      el-col.nav(:span="1")
        nuxt-link(to="/",tag="span") 首页
      el-col.nav(:span="2")
        nuxt-link(to="/my",tag="span") 我的记录
      el-col(:span="4",:offset="3") 
        el-input(v-model="value" placeholder="搜索")
            i(class="el-icon-search el-input__icon",slot="suffix",@click="handleIconClick")
      el-col(:span="6" :offset="2")
        el-button(size="small",type="primary",round) 写文章
        el-button(size="small",round) 登录
</template>

<script>
export default {
  data(){
    return {
      value:'aaa',
    }
  },
  methods:{
    handleIconClick(){

    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    border-top: 2px solid $color;
    z-index: 9;
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 56px;
    width: 100%;
    // background-color: #fff;   
    box-shadow: 0 2px 10px rgba(0,0,0,.05); 
      .header_nav{
        width: $centerWidth;
        height: 100%;
        margin: 0 auto;
        .logo{
          font-size: 24px;
          font-weight: bold;
          // background: linear-gradient(180deg, #000 0%, #009a61 100%) top center/100% 100% no-repeat;
          // background-attachment: local;//背景跟随滚动
          // -webkit-background-clip: text;//背景显示在文字笔画区域
          // background-clip: text;
          // color: transparent;//文字颜色设置为透明
          & > span:nth-child(1){
            // color: $color;
            color: #000;
          }
          & > span:nth-child(2){
            color: $color;
          }
        }
        .nav{
          font-weight: bold;
          cursor: pointer;
        }
      }
    span.nuxt-link-exact-active{
      color: $color;
    }
    span:hover{
      color: $color;
    }
    .el-icon-search{
      cursor: pointer;
    }
    .el-icon-search:hover{
      color:$color;
    }
}

</style>