import request from '../service';
import {AxiosPromise} from "axios";

export const _status: () => AxiosPromise = () => {
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'master/session/status',
        method: 'get'
    });
};


export const _me: () => AxiosPromise = () => {
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'rest/session/me',
        method: 'get'
    });
}