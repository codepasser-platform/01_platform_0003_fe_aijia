import axios from 'axios';

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE,
    // request timeout
    timeout: 150000
    // withCredentials: true,
    // headers: {
    //     'Cache-Control': 'no-cache',
    //     'Pragma': 'no-cache'
    // }
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        // TODO set Authorization token with request header
        // config.headers['Authorization'] = store.state.app.principal;
        console.debug('[Service] <Request> --> {fulfilled} ---> config', config);
        return config;
    },
    (error) => {
        //request error
        console.error('[Service] <Request> --> {rejected} ---> error', error);
        return Promise.reject(error);
    }
);

// respone interceptor
service.interceptors.response.use(
    (response) => {
        console.debug('[Service] <Response> --> {fulfilled} ---> response', response);
        return response;
    },
    (error) => {
        console.debug('[Service] <Response> --> {rejected} ---> error', error);
        let tipError = true;
        if (error && error.response) {
            // TODO Reservation processing error response
            switch (error.response.status) {
                case 400:
                    tipError = false;
                    break;
                case 401:
                    tipError = false;
                    break;
                case 403:
                    tipError = false;
                    break;
                case 404:
                    tipError = false;
                    break;
                case 405:
                    tipError = false;
                    break;
                case 409:
                    tipError = false;
                    break;
                case 422:
                    tipError = false;
                    break;
                case 500:
                    error.message = '服务器内部错误';
                    tipError = true;
                    break;
                default:
                    error.message = '服务器内部错误';
                    tipError = true;
                    break;
            }
        }
        if (tipError) {
            console.error({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            });
        }
        return Promise.reject(error);
    });

export default service;
