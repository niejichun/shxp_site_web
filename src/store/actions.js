const actions = {
    SOME_INCREMENT({commit},n){
        setInterval(function(){
            commit('SOME_INCREMENT',n)
        },1000)

    },
    SOME_DECREMENT({commit},n){
        commit('SOME_DECREMENT',n)
    }
}

export default actions

