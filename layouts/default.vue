<template>
  <div class="layout">
    <Header />
    <Nuxt class="nuxt" />
    <Footer />
  </div>
</template>
<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'
  export default {
    components:{
      Header,
      Footer
    }
  }
</script>
<style lang="scss" scoped>
.layout{
  .nuxt{
    position: relative;
    z-index: 8;
    width: $centerWidth;
    height: 100%;
    margin: 0 auto;
    margin-top: 60px;
  }
}
</style>
