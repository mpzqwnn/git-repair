import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    },
    backstageSign(context,value){
        context.commit('BackstageSign',value)
    },
    userSign(context,value){
        context.commit('UserSign',value)
    }
}
const mutations = {
    TEXTTitle(state,value){
        state.title = value
    },
    TEXTMessage(state,value){
        state.message = value
    },
    TEXTVideo(state,value){
        state.video = value
    },
    BackstageSign(state,value){
        var arr = value.split('%')
        if(localStorage.getItem('backstage') != 1){
            localStorage.setItem('backstage',0)  
        }
        axios.get("./account.json")
        .then(function (response) {
            for (let index = 0; index < response.data.backstage.length; index++) {
                var account = response.data.backstage[index].account
                var password = response.data.backstage[index].password
                if (account == arr[0] && password == arr[1]) {
                    state.Backstage = arr[0]
                    state.BackstagePassword = arr[1]
                    localStorage.setItem('backstage',1)
                }
            }
        },function(err){
            console.log(err)
        })
    },
    UserSign(state,value){
        var arr = value.split('%')
        if(localStorage.getItem('user') != 1){
            localStorage.setItem('user',0)  
        }
        axios.get("./account.json")
        .then(function (response) {
            for (let index = 0; index < response.data.user.length; index++) {
                var account = response.data.user[index].account
                var password = response.data.user[index].password
                if (account == arr[0] && password == arr[1]) {
                    state.User = arr[0]
                    state.UserPassword = arr[1]
                    localStorage.setItem('user',1)
                }
            }
        },function(err){
            console.log(err)
        })
    },
}
const state = {
    User:'',
    UserPassword:'',
    Backstage:'',
    BackstagePassword:'',
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