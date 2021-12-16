import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueMobileSizedView from 'vue-mobile-sized-view';

Vue.config.productionTip = false

new Vue({
  created (){
    AOS.init()
  },
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export default Vue.extend({
  name: 'ComponentA',
  components: {
    VueMobileSizedView
  },
  data () {
    return {
      backgroundColor: "#f6dadb",
      screenBackgroundColor: "#fefefe",
      screenLightShadow: "-31px -31px 62px #FAE0E0",
      screenDarkShadow: "31px 31px 62px #EAB6BE",
      isRounded: true,
    };
  }
});
