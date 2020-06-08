import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import ScreenLayout from '@/layout/app/screen.vue'

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
                component: () => import(/* webpackChunkName: "index" */ './views/index.vue')
            },
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
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
