import request from '../service';

export function _status() {
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'master/session/status',
        method: 'get'
    });
}


export function _me() {
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'rest/session/me',
        method: 'get'
    });
}