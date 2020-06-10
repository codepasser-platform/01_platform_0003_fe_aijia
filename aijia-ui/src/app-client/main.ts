import Vue from 'vue'
import '@/registerServiceWorker'
import '@/utils'
import store from '@/store'

import client from './client.vue'
import router from './router'
import router_guard from './router-guard'

Vue.config.productionTip = false
router_guard.listener();

new Vue({
    router: router,
    store: store,
    render: h => h(client)
}).$mount('#application')
