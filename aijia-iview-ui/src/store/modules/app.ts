export enum SessionStatus {
    ANONYMOUS = 'ANONYMOUS',
    AUTHORIZED = 'AUTHORIZED'
}

export interface AppOrg {
    id: string;
    name: string;
    type: string;
}

export interface AppPrincipal {
    id: string;
    username: string;
    phone?: string;
    email?: string;
    type: string;
    user_statuses: string[];
    locked: boolean;
    authorities: string[];
    org_id: string;
    org: AppOrg;
}

export interface AppState {
    principal: AppPrincipal | undefined;
}

const appState: AppState = {
    principal: undefined
};

const app = {
    state: appState,
    mutations: {
        SET_PRINCIPAL: (state: AppState, principal: AppPrincipal) => {
            // console.log('SET_PRINCIPAL >', principal);
            state.principal = principal;
        },
    },
    actions: {
        setPrincipal: ({commit}: any, principal: AppPrincipal) => {
            return new Promise((resolve, reject) => {
                // console.log('setPrincipal >', principal);
                commit('SET_PRINCIPAL', principal);
                resolve(principal);
            });
        }
    }
};

export default app;
