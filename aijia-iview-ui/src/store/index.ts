import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import spaces from './modules/spaces';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        spaces
    },
    getters
});

export default store;
console.debug('[Loading] <Store> --> {app,spaces}');
