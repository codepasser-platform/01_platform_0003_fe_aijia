import request from '../service';

export function _sampleMockSearch(page: number, size: number, _conditions?: any) {
    const pagination: any = {
        page: page,
        size: size
    };
    return request({
        url: process.env.VUE_APP_API_CONTEXT + 'mock/sample/search',
        method: 'post',
        params: pagination,
        data: _conditions
    });
}