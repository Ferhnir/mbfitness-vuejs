import Vue from 'vue';
import Vuex from 'vuex';

import bttnActions from './store/buttonActions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bttnActions
  }
});