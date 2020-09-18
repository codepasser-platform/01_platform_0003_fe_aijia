console.debug('[Loading] <Router> --> {router}');

import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
/** Layout **/
import ScreenLayout from '@/layout/screen.vue';
import ShowLayout from '@/layout/show.vue';
import ModuleLayout from '@/layout/module.vue';
/** Error **/
import ERROR_401 from '@/error/401.vue';
import ERROR_403 from '@/error/403.vue';
import ERROR_404 from '@/error/404.vue';
import ERROR_500 from '@/error/500.vue';

Vue.use(VueRouter);

export const constantRouterMap: Array<RouteConfig> = [
    // index
    {
        path: '/',
        component: ScreenLayout,
        children: [
            {
                path: '',
                name: 'index',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: 'index' */ './views/index.vue')
            },
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: 'home' */ './views/home.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: 'profile' */ './views/profile.vue')
            }
        ]
    },
    {
        path: '/ecology',
        component: ShowLayout,
        children: [
            {
                path: '',
                name: 'ecology',
                component: () => import(/* webpackChunkName: 'ecology' */ './views/ecology.vue')
            }
        ]
    },
    // Error
    {
        path: '/error',
        name: 'error',
        component: ScreenLayout,
        meta: {title: 'error', hidden: true},
        children: [
            {path: '401', name: '401', component: ERROR_401, meta: {title: '401', hidden: true}},
            {path: '403', name: '403', component: ERROR_403, meta: {title: '403', hidden: true}},
            {path: '404', name: '404', component: ERROR_404, meta: {title: '404', hidden: true}},
            {path: '500', name: '500', component: ERROR_500, meta: {title: '500', hidden: true}}
        ]
    }
];

export const asyncRouterMap: Array<RouteConfig> = [
    //  Micro
    {
        path: '/case',
        component: ModuleLayout,
        meta: {title: 'case', hidden: true},
        children: [
            {
                path: 'list',
                name: 'case-list',
                component: () => import(/* webpackChunkName: 'case-list' */ './views/case/list.vue')
            },
            {
                path: 'detail',
                name: 'case-detail',
                component: () => import(/* webpackChunkName: 'case-detail' */ './views/case/detail.vue')
            },
            {
                path: 'unit',
                name: 'case-unit',
                component: () => import(/* webpackChunkName: 'case-unit' */ './views/case/unit.vue')
            }
        ]
    }
];

export const notfoundRouterMap: Array<RouteConfig> = [
    {path: '*', redirect: '/error/404'}
];

const router = new VueRouter({
    base: process.env.VUE_APP_CONTEXT,
    mode: 'history',
    routes: constantRouterMap,
    scrollBehavior: () => ({x: 0, y: 0,})
});

export default router;
