<template>
  <div>
    <Head></Head>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
    import Head from '../public/components/head.vue'
    import Footer from '../public/components/footer.vue'

    export default {
      components: {
        Head,
        Footer
      }
    }
</script>
<style>
  @import './assets/css/global.css';
</style>


