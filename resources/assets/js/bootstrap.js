import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import axios from 'axios'
import lodash from 'lodash'
import {
    appName,
    apiUrl,
} from './config'

// Global variables
window.Vue = Vue
window.axios = axios
window._ = lodash
window.appName = appName

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
