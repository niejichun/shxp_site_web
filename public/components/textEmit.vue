<template>
    <div>the page for test emit</div>
</template>
<script>
    export default{
        created:function(){
            console.log('textEmit created');
            this.$parent.$on('textEmil',function(){
                console.log('textEmil')
            })

//            let _self = this
//            _self.$parent.eventHub.$on('textEmil', () => {
//                console.log('textEmil')
//            })
        }
    }
</script>
<style>

</style>