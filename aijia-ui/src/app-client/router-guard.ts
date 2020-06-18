console.debug('[Loading] <Router> --> {guard}');

import {AppPrincipal, SessionStatus} from "@/store/modules/app";
import {NavigationGuardNext, RawLocation, Route} from 'vue-router';
import router, {asyncRouterMap} from './router';
import store from '@/store';
import RouterMatcher from '@/utils/matcher';
import {_me, _status} from "@/services/api/session-api";

// 静态目录[不主动获取session principal]
const STATIC_LIST: string[] = ['/', '/client.html', '/ecology/**', '/error/**'];
// 白名单[主动获取session principal]
const WHITE_LIST: string[] = ['/home']; // '/profile'

export class RouterGuard {

    private routerMatcher: RouterMatcher = new RouterMatcher(STATIC_LIST, WHITE_LIST);
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
        let whitelistMatchResult = this.routerMatcher.matchWhiteList(to.path);
        let staticListMatchResult = this.routerMatcher.matchStaticList(to.path);
        console.log('[Listener] <RouterGuard> --> {permission}', '[{from : ', from.path, '},{to : ', to.path, '},{whitelist : ', whitelistMatchResult, '},{static : ', staticListMatchResult + '}]');

        // 0 静态访问
        if (staticListMatchResult) {
            console.log('[Listener] <RouterGuard> --> {permission} ---> static check pass', '[{to : ', to.path + '}]');
            this.routeHandle(to, from, next);
            return;
        }

        // 1 已登录
        console.log('[Listener] <RouterGuard> --> {permission} ---> principal check', '[{principal : ', store.state.app.principal, '}]');
        if (store.state.app.principal) {
            console.log('[Listener] <RouterGuard> --> {permission} ---> principal check pass', '[{principal : ', store.state.app.principal, '}]');
            this.routeHandle(to, from, next);
            return;
        }

        // 2 登录处理
        this.sessionStatus().then((response) => {
            console.log('[Listener] <RouterGuard> --> {permission} ---> status', '[{response : ', response.data.session, '}]');
            if (response && response.data && response.data.session === SessionStatus.AUTHORIZED) {
                // 2.1 已登录状态
                this.sessionMe().then((_response) => {
                    console.log('[Listener] <RouterGuard> --> {permission} ---> me', '[{response : ', _response.data, '}]');
                    this.initializePrincipal(_response.data);
                    this.routeHandle(to, from, next);
                }).catch((_reason) => {
                    console.error('[Listener] <RouterGuard> --> {permission} ---> me', '[{reason : ', _reason, '}]');
                    this.routeHandle(to, from, next, {path: '/error/500', hash: to.hash, query: to.query, params: to.params});
                })
            } else {
                if (whitelistMatchResult) {
                    // 2.2 访问白名单
                    console.log('[Listener] <RouterGuard> --> {permission} ---> whitelist check pass', '[{to : ', to.path + '}]');
                    this.routeHandle(to, from, next);
                } else {
                    // 2.3 未登录访问黑名单
                    this.routeHandle(to, from, next, {path: '/error/401', hash: to.hash, query: to.query, params: to.params});
                }
            }
        }).catch((reason) => {
            console.error('[Listener] <RouterGuard> --> {permission} ---> status', '[{reason : ', reason, '}]');
            this.routeHandle(to, from, next, {path: '/error/500', hash: to.hash, query: to.query, params: to.params});
        });
        return;
    }

    private routeHandle(to: Route, from: Route, next: NavigationGuardNext<Vue>, redirect?: RawLocation): void {
        console.log('[Listener] <RouterGuard> --> {routeHandle}', '[{from : ', from.path, '},{to : ', to.path, '},{hash : ', to.hash, '},{query : ', to.query, '},{params : ', to.params, '},{redirect : ', redirect, '}]');
        // Initialize & Proxy pass
        if (store.state.app.principal && !this.initialized) {
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
        // TODO principal permission with api load
        // async routers
        router.addRoutes(asyncRouterMap);
        this.initialized = true;
        console.log('[Listener] <RouterGuard> --> {initialize} ---> router', '[{from : ', from.path, '},{to : ', to.path + '}]');
    }

    private initializePrincipal(principal: AppPrincipal): void {
        store.commit('SET_PRINCIPAL', principal);
        console.log('[Listener] <RouterGuard> --> {initialize} ---> principal', '[{principal : ', principal, '}]');
    }

    private sessionStatus(): Promise<any> {
        return new Promise((resolve, reject) => {
            _status().then((response) => {
                resolve(response);
            }).catch((reason) => {
                reject(reason);
            })
        });
    }

    private sessionMe(): Promise<any> {
        return new Promise((resolve, reject) => {
            _me().then((response) => {
                resolve(response);
            }).catch((reason) => {
                reject(reason);
            })
        });
    }


}

const router_guard = new RouterGuard();
export default router_guard;
