import {DirectiveOptions} from "vue";
import {DirectiveBinding} from "vue/types/options";

const selector: DirectiveOptions = {
    bind: function (_el: HTMLElement, _binding: DirectiveBinding) {
    },
    inserted: function (_el: HTMLElement, _binding: DirectiveBinding) {
        console.debug('[Directive] <Selector> --> {inserted}', _el, _binding);
    },
    unbind: function (_el: HTMLElement, _binding: DirectiveBinding) {
        console.debug('[Directive] <Selector> --> {unbind}', _el, _binding);
    }
};
export default selector;
