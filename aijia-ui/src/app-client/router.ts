import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import ScreenLayout from '@/layout/client/screen.vue'

Vue.use(VueRouter)

console.log('App router process.env > ', process.env);

const routes: Array<RouteConfig> = [
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

]

const router = new VueRouter({
    base: process.env.VUE_APP_CONTEXT,
    mode: 'history',
    routes
})

export default router
