import Vue from 'vue'
import Client from './client.vue'
import '../registerServiceWorker'
import router from './router'
import store from '@/store'
import '@/utils'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Client)
}).$mount('#application')
