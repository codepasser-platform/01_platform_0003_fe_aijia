import request from '../service';
import {AxiosPromise} from "axios";

export const _sampleMockSearch: (page: number, size: number, conditions?: any) => AxiosPromise = (page, size, conditions) => {
    const pagination: any = {
        page: page,
        size: size
    };
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'mock/sample/search',
        method: 'post',
        params: pagination,
        data: conditions
    });
};