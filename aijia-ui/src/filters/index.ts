import Vue from 'vue';
import money from './money';

Vue.filter('money', money);

console.debug('[Loading] <Filters> --> {money}');