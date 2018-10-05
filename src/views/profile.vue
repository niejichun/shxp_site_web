<template>
    <div id="homePage">
        this is profile
        <button @click='testRouter'>
            goto homePage
        </button>
    </div>
</template>
<script>
    export default {
      methods: {
        testRouter () {
          this.$router.push({
            path: '/homePage'
          })
        }
      }
    }
</script>
<style scoped>
    #homePage{
        color: yellowgreen;
    }
</style>


