import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import settings from './modules/settings';
import users from './modules/users';
import showToggle from './modules/show-toggle';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    users,
    showToggle,
  },
  getters,
});

export default store;
