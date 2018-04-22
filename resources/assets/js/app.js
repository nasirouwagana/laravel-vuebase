import './bootstrap'
import router from './router'
import App from './components/App.vue'

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
