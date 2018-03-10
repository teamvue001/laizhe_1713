import Vue from 'vue';
import Vuex from 'vuex';
import day1 from '../pages/promotion/module-day'
import day from '../pages/login/module-day'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 3
	},
    modules: {
        mDay: day1
    },
	getters: {
		mulcount(state, getters) {
			return state.count * state.count
		},
		mulcountAdd(state, getters) {
			return getters.mulcount + 1
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})
