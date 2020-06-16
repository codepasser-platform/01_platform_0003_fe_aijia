import '@/assets/styles/common.less'
import Vue from 'vue';
import iview from 'view-design';
import '@/registerServiceWorker';
import '@/utils';
import store from '@/store';

import app from './app.vue';
import router from './router';
import router_guard from './router-guard';
import i18n from './lang'

/** mock **/
if (process.env.VUE_APP_MOCK_MODE === 'ON') {
    /* Mock api **/
    require('@/services/mock')
}

Vue.config.productionTip = false;
router_guard.listener();
Vue.use(iview, {
    transfer: true,
    capture: false,
    size: 'default',// set iview default size [default, small, large]
    // Global options
    // select: {
    //     arrow: 'md-arrow-dropdown',
    //     arrowSize: 16
    // },
    i18n: (key: string, value: any) => i18n.t(key, value)
});

new Vue({
    router: router,
    store: store,
    i18n: i18n,
    render: h => h(app)
}).$mount('#application');
