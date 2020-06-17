import Vue from 'vue';
import selector from './selector'

Vue.directive('selector', selector);

console.debug('[Loading] <Directives> --> {selector}');
