export interface SpacesCache {
    area: Object;
}

export interface SpacesState {
    cache: SpacesCache | undefined;
}

const spacesState: SpacesState = {
    cache: undefined
};

const spaces = {
    namespaced: true,
    state: spacesState,
    mutations: {
        SET_CACHE: (state: SpacesState, cache: SpacesCache) => {
            // console.log('SET_CACHE >', cache);
            state.cache = cache;
        }
    },
    actions: {
        setCache: ({commit}: any, cache: SpacesCache) => {
            return new Promise((resolve, reject) => {
                // console.log('setCache >', cache);
                commit('SET_CACHE', cache);
                resolve(cache);
            });
        }
    }
};

export default spaces;
