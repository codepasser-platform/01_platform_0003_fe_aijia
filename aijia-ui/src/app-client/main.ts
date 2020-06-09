import Vue from 'vue'
import '@/registerServiceWorker'
import '@/utils'
import store from '@/store'

import Client from './client.vue'
import Router from './router'
import RouterGuard from './router-guard'

Vue.config.productionTip = false
RouterGuard.listener();

new Vue({
    router: Router,
    store,
    render: h => h(Client)
}).$mount('#application')
