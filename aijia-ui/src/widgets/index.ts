import Vue from 'vue';
import NavigatorWidget from '@/widgets/navigator/index.vue';
import BackgroundWidget from '@/widgets/background/index.vue';

const WgNavigator = {
    install: () => {
        Vue.component('WgNavigator', NavigatorWidget);
    }
};
Vue.use(WgNavigator);


const WgBackground = {
    install: () => {
        Vue.component('WgBackground', BackgroundWidget);
    }
};
Vue.use(WgBackground);

console.debug('[Loading] <Widgets> --> {wg-navigator,wg-background}');