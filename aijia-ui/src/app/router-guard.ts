console.log('[Loading] <Router> --> {guard}');

import {NavigationGuardNext, RawLocation, Route} from 'vue-router';
import router, {asyncRouterMap} from './router';
import store from '@/store';
import RouterMatcher from '@/utils/matcher';

const WHITELIST: string[] = ['/', '/error/401', '/error/403', '/error/404', '/error/500', '/guide/**'];

export class RouterGuard {

    private routerMatcher: RouterMatcher = new RouterMatcher(WHITELIST);
    private initialized: boolean = false;

    constructor() {
    }

    public listener(): void {
        this.start();
    }

    private start(): void {
        router.beforeEach((to, from, next) => {
            this.permission(to, from, next);
        });
    }

    private permission(to: Route, from: Route, next: NavigationGuardNext<Vue>): void {
        let whitelistMatchResult = this.routerMatcher.matchPath(to.path);
        console.log('[Listener] <RouterGuard> --> {permission}', '[{from : ', from.path, '},{to : ', to.path, '},{whitelist : ', whitelistMatchResult + '}]');
        // 1 白名单校验
        if (whitelistMatchResult) {
            console.log('[Listener] <RouterGuard> --> {permission} ---> whitelist check pass', '[{to : ', to.path + '}]');
            this.routeHandle(to, from, next);
            return;
        }

        // 2 登录信息校验
        console.log('[Listener] <RouterGuard> --> {permission} ---> principal check', '[{principal : ', store.state.app.principal, '}]');
        if (store.state.app.principal) {
            console.log('[Listener] <RouterGuard> --> {permission} ---> principal check pass', '[{principal : ', store.state.app.principal, '}]');
            this.routeHandle(to, from, next);
            return;
        }

        // 3 未登录处理
        if (!store.state.app.principal) {
            this.initializePrincipal();
            if (store.state.app.principal) {
                console.log('[Listener] <RouterGuard> --> {permission} ---> principal check pass', '[{principal : ', store.state.app.principal, '}]');
                this.routeHandle(to, from, next);
            } else {
                this.routeHandle(to, from, next, {path: '/error/403', hash: to.hash, query: to.query, params: to.params});
            }
        }
    }

    private routeHandle(to: Route, from: Route, next: NavigationGuardNext<Vue>, redirect?: RawLocation): void {
        console.log('[Listener] <RouterGuard> --> {routeHandle}', '[{from : ', from.path, '},{to : ', to.path, '},{hash : ', to.hash, '},{query : ', to.query, '},{params : ', to.params, '},{redirect : ', redirect, '}]');
        // Initialize & Proxy pass
        if (!this.initialized) {
            this.initializeRouter(to, from);
            console.log('[Listener] <RouterGuard> --> {routeHandle} ---> proxy pass', '[{to : ', to.path + '}]');
            next({path: to.path, hash: to.hash, query: to.query, params: to.params});
            return;
        }
        // Redirect
        if (redirect) {
            console.log('[Listener] <RouterGuard> --> {routeHandle} ---> redirect', '[{redirect : ', redirect, '}]');
            next(redirect);
            return;
        }
        // Forward
        console.log('[Listener] <RouterGuard> --> {routeHandle} ---> forward', '[{to : ', to.path + '}]');
        next();
        return;
    }

    private initializeRouter(to: Route, from: Route): void {
        // async routers
        router.addRoutes(asyncRouterMap);
        this.initialized = true;
        console.log('[Listener] <RouterGuard> --> {initializeRouter}', '[{from : ', from.path, '},{to : ', to.path + '}]');
    }


    private initializePrincipal = function () {
        // TODO user principal with api load
        store.commit('SET_PRINCIPAL', {username: "admin"});
    }

}

const router_guard = new RouterGuard();
export default router_guard;
