import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
/** Layout **/
import ScreenLayout from '@/layout/client/screen.vue'
/** Error **/
import ERROR_401 from '@/error/401.vue'
import ERROR_403 from '@/error/403.vue'
import ERROR_404 from '@/error/404.vue'
import ERROR_500 from '@/error/500.vue'

Vue.use(VueRouter)

console.log('[Environment] <Client> --> {process.env}',process.env)

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
                component: () => import(/* webpackChunkName: "client-index" */ './views/index.vue')
            },
            {
                path: 'client.html',
                name: 'entry',
                component: () => import(/* webpackChunkName: "client-entry" */ './views/index.vue')
            },
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "client-home" */ './views/home.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "client-about" */ './views/about.vue')
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
]

export const asyncRouterMap = [
    //  Micro
    {
        path: '/case',
        component: ScreenLayout,
        meta: {title: 'case', hidden: true},
        children: [
            {
                path: 'list',
                name: 'case-list',
                component: () => import(/* webpackChunkName: "case-list" */ './views/case/list.vue')
            },
            {
                path: 'detail',
                name: 'case-data',
                component: () => import(/* webpackChunkName: "case-data" */ './views/case/detail.vue')
            }
        ]
    },
    {path: '*', redirect: '/error/404', hidden: true}
];

const router = new VueRouter({
    base: process.env.VUE_APP_CONTEXT,
    mode: 'history',
    routes: constantRouterMap,
    scrollBehavior: () => ({x: 0, y: 0,})
})

export default router
