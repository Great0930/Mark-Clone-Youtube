import Axios from 'axios';

const baseURL = '';

const axios = Axios.create({
    baseURL,
    timeout: 20000 // 請求超時 20s
});

// 前置攔截器（發起請求之前的攔截）
axios.interceptors.request.use(
    response => {
        /**
         * 根據你的項目實際情況來對 config 做處理
         * 這裏對 config 不做任何處理，直接返回
         */
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

// 後置攔截器（獲取到響應時的攔截）
axios.interceptors.response.use(
    response => {
        /**
         * 根據你的項目實際情況來對 response 和 error 做處理
         * 這裏對 response 和 error 不做任何處理，直接返回
         */
        return response;
    },
    error => {
        if (error.response && error.response.data) {
            const code = error.response.status;
            const msg = error.response.data.message;
            alert(`Code: ${code}, Message: ${msg}`);
            console.error(`[Axios Error]`, error.response);
        } else {
            alert(`${error}`);
        }
        return Promise.reject(error);
    }
);

export default axios;
