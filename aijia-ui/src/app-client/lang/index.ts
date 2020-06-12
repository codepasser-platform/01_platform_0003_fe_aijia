import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import ui_en from 'view-design/src/locale/lang/en-US';
import ui_zh from 'view-design/src/locale/lang/zh-CN';
import en from './en';
import zh from './zh';

Vue.use(VueI18n);

const messages = {
    en: {
        ...en,
        ...ui_en
    },
    zh: {
        ...zh,
        ...ui_zh
    }
};

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'zh', // set locale
    messages // set locale messages
});

export default i18n;
