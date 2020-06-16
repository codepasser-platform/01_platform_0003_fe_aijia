import Vue from 'vue';
import Navigator from '@/widgets/navigator/index.vue';

const WgNavigator = {
    install: () => {
        // console.log('Widgets SelectTree -> install');
        Vue.component('WgNavigator', Navigator);
    }
};
Vue.use(WgNavigator);

console.debug('[Loading] <Widgets> --> {WgNavigator}');