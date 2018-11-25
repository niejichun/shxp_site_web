<template>
    <div>
        the page for test $emit
    </div>
</template>
<script>
    export default {
        props:['params1','params2'],
        date:()=>{

        },
        created:function(){
            console.log('created')
        },
        watch:{
            params1:function(){
                console.log('params1',this.params1)
            },
            params2:function(){
                console.log('params2',this.params2)
            }
        }
    }
</script>
<style>

</style>