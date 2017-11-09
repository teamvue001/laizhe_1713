import Vuex from 'vuex';
import Vue from 'vue';
// import home from '../pages/home/module.js'; //这里存储了home要用到的数据

Vue.use(Vuex);


let options = {
    state : {
        name : "wangpeng",
        nickName : "鹏哥"
    },
    mutations :{
        rename :(state, preload) => {
            state.name = preload;
        },
        playing : (state, preload) => {
            state.name += "is playing";
        }
    },
    getters: {
        play : function(state, getters) {
            return getters.study + "_" + state.nickName +"is playing!";
        },
        study : function(state, getters) {
            return state.name
        }
    },
    actions : {
        anything(context) {
            console.log(context.name);
        }
    }
}

const store = new Vuex.Store(options);
export default  store;
