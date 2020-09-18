import Vue from 'vue';
import BaseNavigatorWidget from '@/widgets/navigator/base.vue';
import BackgroundWidget from '@/widgets/background/index.vue';

const WgBaseNavigator = {
    install: () => {
        Vue.component('WgBaseNavigator', BaseNavigatorWidget);
    }
};
Vue.use(WgBaseNavigator);


const WgBackground = {
    install: () => {
        Vue.component('WgBackground', BackgroundWidget);
    }
};
Vue.use(WgBackground);

console.debug('[Loading] <Widgets> --> {wg-navigator,wg-background}');