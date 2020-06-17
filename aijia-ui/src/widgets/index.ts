import Vue from 'vue';
import NavigatorWidget from '@/widgets/navigator/index.vue';

const WgNavigator = {
    install: () => {
        // console.log('Widgets SelectTree -> install');
        Vue.component('WgNavigator', NavigatorWidget);
    }
};
Vue.use(WgNavigator);

console.debug('[Loading] <Widgets> --> {wg-navigator}');