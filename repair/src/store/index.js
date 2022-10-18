import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    textTitle(context,value){
        context.commit('TEXTTitle',value)
    },
    textMessage(context,value){
        context.commit('TEXTMessage',value)
    },
    textVideo(context,value){
        context.commit('TEXTVideo',value)
    }
}
const mutations = {
    TEXTTitle(state,value){
        state.title =value
    },
    TEXTMessage(state,value){
        state.message =value
    },
    TEXTVideo(state,value){
        state.video =value
    }
}
const state = {
    user:[],
    password:[],
    order:[],
    title:'',
    message:'',
    video:''
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})