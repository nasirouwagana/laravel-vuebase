import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import axios from 'axios'
import lodash from 'lodash'

// Global variables
window.Vue = Vue
window.axios = axios
window._ = lodash
window.appName = process.env.MIX_APP_NAME
window.appUrl = process.env.MIX_APP_URL
window.apiUrl = process.env.MIX_API_URL

// Plugins initializations
Vue.use(VueRouter)
Vue.use(Vuetify)

// Axios configuration
// axios.defaults.baseURL = apiUrl + '/api'
// axios.defaults.headers.common = {
//     'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': `Bearer token_value`
// }
