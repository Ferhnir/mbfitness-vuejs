import Vue from 'vue';
import App from './App.vue';

//Directives
import vClickOutside from 'v-click-outside';
Vue.use(vClickOutside);

//Vuex config
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store.js';

//Vuetify init
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'roboto-fontface/css/roboto/roboto-fontface.css'

//Vue-Lodash
import VueLodash from 'vue-lodash'
const options = { name: 'lodash' }
Vue.use(VueLodash, options)

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa4',
    values: {
      menu: 'fas fa-bars',
      objective: 'fas fa-bullseye',
      boxes: 'fas fa-boxes',
      coins: 'fas fa-coins',
      phone: 'fas fa-phone',
      star: 'fas fa-star',
      fb: 'fab fa-facebook-f',
      yt: 'fab fa-youtube',
      envelope: 'fas fa-envelope',
      clock: 'far fa-clock',
      anchor: 'fas fa-anchor',
      heart: 'far fa-heart',
      mobile: 'fas fa-mobile-alt',
      calendar: 'far fa-calendar-alt',
      comments: 'fas fa-comments',
      whatsapp: 'fab fa-whatsapp',
      check: 'fas fa-check-circle',
      question: 'fas-fa-question-circle',
      next: 'fas fa-arrow-right',
      prev: 'fas fa-arrow-left',
      edit: 'fas fa-pen-square'
    }
  }
}

Vue.config.productionTip = false


import { mapActions } from 'vuex';

Vue.mixin({
  methods: {
    ...mapActions([
      'setContactDialogState'
    ]),
    loadImage: (img) => {
      return require('@/assets/img/' + img);
    }
  }
})

new Vue({
  store,
  render: h => h(App),
  vuetify: new Vuetify(opts)
}).$mount('#app')
