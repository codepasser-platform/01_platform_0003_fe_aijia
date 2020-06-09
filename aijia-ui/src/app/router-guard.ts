console.log('[Loading] <Router> --> {guard}');
import Router from './router'

export class RouterGuard {
    public listener(): void {
        this.permission();
    }

    private permission(): void {
        Router.beforeEach((to, from, next) => {
            console.debug('[Listener] <Router> --> {permission}', from.path, to.path);
            next();
        });
    }
}

export default new RouterGuard();
