
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'

export default ()=>{
    return new Vuex.Store({
        state: state,
        mutations: mutations
    })
}
