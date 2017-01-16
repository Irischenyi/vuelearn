import Vue from 'vue';
import App from './app.vue';
import Edit from './Edit.vue';
import PriceAll from './PriceAll.vue';
import Screen from './Screen.vue';
import Search from './Search.vue';
import VueRouter from 'vue-router';
import Routers from './Router.vue';
import Animation from './Animation.vue';
import Tab from './Tab.vue';
import Resourse from 'vue-resource';
import Vuex from 'vuex';
import Count from './Count.vue';
import store from './store.js';

Vue.use(VueRouter);
Vue.use(Resourse);
Vue.use(Vuex);

const router = new VueRouter({
    routes: [
        {
            path: '/tab',
            name: 'tab',
            component: Tab,
        },
        {
            path: '/animation',
            name: 'animation',
            component: Animation,
        },
        {
            path: '/app',
            name: 'app',
            component: App,
        },
        {
            path: '/count',
            name: 'count',
            component: Count,
        },
    ],
});
new Vue({
    el: '#app',
    store,
    data: {
        all: 'ssss',
    },
    methods: {
        change () {
            this.all = this.all + 'ss';
            store.commit('increment',1);
        },
    },
    components: {
        Count,
    },
});
