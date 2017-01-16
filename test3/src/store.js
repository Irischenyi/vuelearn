import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 12,
        todos: [
            {
                id: 1,
                text: '...',
                done: true,
            },
            {
                id: 2,
                text: '...',
                done: false,
            },
            {
                id: 3,
                text: '...',
                done: false,
            },
        ],
    },
    mutations: {
        increment (state) {
            state.count = state.count + 10;
            console.log(state.count);
        },
    },
    actions: {
        increment ({ commit }) {
            setTimeout(() => {
                commit('increment');
            },1000);
        },
    },
});

export default store;
