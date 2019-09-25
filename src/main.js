import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal';
// import axios from 'axios'
// import VueAxios from 'vue-axios'


import { MdButton,MdDrawer,MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueResource);
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueScrollReveal,{
  duration: 800,
  scale:1,
  distance: '50px',
  reset: true,
});
// Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.http.options.root = 'https://dominos-540de.firebaseio.com'

new Vue({
  render: h => h(App),
}).$mount('#app')
