import Vue from 'vue';
import Vuex from 'vuex';

import navDrawer from './store/NavDrawerState.js';
// import faqs from './store/modules/faqs.js';
// import ores from './store/modules/ores.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navDrawer
    // posts,
    // faqs,
    // ores
  }
});