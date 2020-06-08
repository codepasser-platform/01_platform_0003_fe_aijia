import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

console.log('App router process.env > ', process.env);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
]

const router = new VueRouter({
    base: process.env.VUE_APP_CONTEXT,
    mode: 'history',
    routes
})

export default router