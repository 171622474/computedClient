<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"      
    >
        <template v-for="(item) in menuList">
            <!-- 有子集 -->
            <el-submenu :index="item.name" :key="item.name" v-if="item.children" >
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="(itemC,indexC) in item.children" :index="indexC.name" :key="indexC.name">
                    <template slot="title">{{itemC.name}}</template>
                </el-menu-item>
            </el-submenu>
            <!-- 无子集 -->
            <el-menu-item v-else :index="item.name" :key="item.name">
                {{item.name}}
            </el-menu-item>
        </template>

    </el-menu>
  </div>
</template>

<script>
export default {
    name:'menu',
  data() {
    return {
      isCollapse: true,
      searchValue:'',
      menuList:[
          {
              name:'前端',
              path:'web',
              children:[
                  {
                        name:'node',
                        path:'node',
                  },
                  {
                        name:'vue',
                        path:'vue',
                  },
              ]
          },
          {
              name:'java',
              path:'java'
          },
          {
              name:'php',
              path:'php'
          },
          {
              name:'小程序',
              path:'小程序'
          },
          {
              name:'ios',
              path:'ios'
          },
          {
              name:'Android',
              path:'Android'
          },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleIconClick(){
        console.log('search icon clicked');
    }
  },
};
</script>

<style lang="scss" scoped>
.el-menu-item{
    min-width: auto;
}
</style>