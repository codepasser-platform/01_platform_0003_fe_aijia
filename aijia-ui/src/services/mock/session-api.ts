import Mock from 'mockjs';
import {SessionStatus} from "@/store/modules/app";

const _status = (options: any) => {
    const _anonymous = {
        "session": SessionStatus.ANONYMOUS
    };
    const _authorized = {
        "session": SessionStatus.AUTHORIZED
    }
    return _authorized;
};

const _me = (options: any) => {
    const _admin = {
        "id": "1",
        "username": "admin",
        "phone": "18516171342",
        "email": "admin@codepasser.com",
        "type": "GENERATED",
        "user_statuses": [
            "MANAGED"
        ],
        "locked": false,
        "authorities": [
            "USER",
            "ADMIN",
            "MGR"
        ],
        "org_id": "0",
        "org": {
            "id": "0",
            "name": "codepasser.com",
            "type": "ROOT"
        }
    }
    return _admin;
};

/**
 *  Mock.mock( url, post/get/delete/put , 返回的数据)
 */
Mock.mock(process.env.VUE_APP_API_BASE + process.env.VUE_APP_API_CONTEXT + 'master/session/status', 'get', _status);
Mock.mock(process.env.VUE_APP_API_BASE + process.env.VUE_APP_API_CONTEXT + 'rest/session/me', 'get', _me);