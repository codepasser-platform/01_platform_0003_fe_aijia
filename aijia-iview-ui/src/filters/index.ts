import Vue from 'vue';
import money from './money';
import dateConvert from './date-convert'

Vue.filter('money', money);
Vue.filter('dateConvert', dateConvert);

console.debug('[Loading] <Filters> --> {money,date-convert}');