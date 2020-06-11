import Vue from 'vue';
import '@/registerServiceWorker';
import '@/utils';
import store from '@/store';

import app from './app.vue';
import router from './router';
import router_guard from './router-guard';

/** mock **/
if (process.env.VUE_APP_MOCK_MODE === 'ON') {
    /* Mock api **/
    require('@/services/mock')
}

Vue.config.productionTip = false;
router_guard.listener();

new Vue({
    router: router,
    store: store,
    render: h => h(app)
}).$mount('#application');
