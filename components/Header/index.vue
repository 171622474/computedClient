<template lang="pug">
  .header
    //- .header_nav
      //- .logo computed.cn
      //- .nav 首页
      //- .search
      //-   el-input(v-model="value" placeholder="搜索")
      //- .login 登录注册
    el-row(type="flex" justify="space-between" align="middle").header_nav
      el-col.logo(:span="4") computed.cn
      el-col(:span="2") 首页
      el-col(:span="4",:offset="4") 
        el-input(v-model="value" placeholder="搜索")
      el-col(:span="6" :offset="2") 登录注册
</template>

<script>
export default {
  data(){
    return {
      value:'',
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    z-index: 9;
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 56px;
    width: 100%;
    // background-color: #fff;   
    box-shadow: 0 2px 10px rgba(0,0,0,.05); 
      .header_nav{
        min-width: 900px;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        .logo{
          font-size: 24px;
          font-weight: bold;
        }
      }
}

</style>