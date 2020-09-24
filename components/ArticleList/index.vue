<template lang="pug">
  .Article
    div(v-for="(item,index) in list" :key="index")
        el-row.ArticleList(:gutter="0")
            el-col(:span='20')
                h4.title {{item.title}}
                p.datas {{item.desc}}
            el-col.img(:span='4')
                img(src="https://tpc.googlesyndication.com/simgad/837638829849209966?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnv3zmitxl9C1bU0FTMNEV6OamaWw")
            div
                el-tag.fl.mr10(size="mini",effect="dark") vue.js
                el-tag.fl.mr10(size="mini",effect="dark") ES6
                p 来自 zhangchao vue笔记 30小时之前
</template>

<script>
export default {
    props:{

        list: {
            type: Array,
        },
    },
    data(){
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
.ArticleList{
    padding:10px;
    margin: 10px 0;
    border-bottom:1px solid #eee;
    cursor: pointer;
    .title{
        display: inline;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #212121;
        position: relative;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;        
    }
    .datas{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        margin: 10px 0;
        color: #888;
        font-size: 13px;
    }
    .img{
        text-align:center;
        img{
            height: 80px;
        }
    }
}
</style>