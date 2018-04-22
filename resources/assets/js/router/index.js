import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('../components/Home')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: require('../components/Dashboard/Layout'),
        children: [
            {
                path: 'indicators',
                name: 'dashboard.indicators',
                component: require('../components/Dashboard/Indicators')
            },
            {
                path: 'backup',
                name: 'dashboard.backup',
                component: require('../components/Dashboard/Backup')
            },
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: require('../components/Dashboard/Logs')
            }
        ]
    }
]

export default new VueRouter({
    base: document.querySelector('#app').getAttribute('data-base'),
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
