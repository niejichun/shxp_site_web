<template>
    <div>the page for test emit
        <input type="button" value="点击触发" @click="childClick">
    </div>

</template>
<script>
    export default{
        created:function(){
            console.log('textEmit created');
//            this.$parent.$on('textEmil',function(){
//                console.log('textEmil')
//            })

//            let _self = this
//            _self.$parent.eventHub.$on('textEmil', () => {
//                console.log('textEmil')
//            })

//            this.$emit('testOnBut','123123123')
        },
        methods: {
            childClick () {
                console.log('childClick...')
                // childByValue是在父组件on监听的方法
                // 第二个参数this.childValue是需要传的值
                this.$emit('childByValue','121212')
            }
        }
    }
</script>
<style>

</style>