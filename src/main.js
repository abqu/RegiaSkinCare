import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2'
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'


Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.component('v-text-field', VTextField);
Vue.use(VCurrencyField, {
  locale: 'es-MX',
  decimalLength: 2,
  autoDecimalMode: true,
  min: 0,
  max: null,
  defaultValue: 0,
});

new Vue({
    vuetify,
    router,
  render: h => h(App)
}).$mount('#app')
