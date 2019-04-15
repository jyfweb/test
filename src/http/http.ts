/*
 * @Author: jyf
 * @LastEditors: jyf
 * @Date: 2019-04-02 10:12:54
 * @LastEditTime: 2019-04-08 14:45:58
 */
import axios from 'axios'
import store from '../vuex/modules/login'
import { MessageBox } from 'element-ui'

declare var $: any;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// build http header
function buildHeader(): { [key: string]: string } {
    return {
        'Content-Type': 'application/json;charset=UTF-8;multipart/form-data'
    }
}

export let ax = axios.create({
    baseURL: host(),
    headers: buildHeader(),
    timeout: 20000000,
    responseType: 'json',
    withCredentials: false,
    transformRequest: [
        function (data) {
            if (data instanceof FormData) return data
            return JSON.stringify(data)
        }
    ],
    transformResponse: [
        function (data) {
            if (data) {
                return data
            } else {
                let msg = 'Unknow Error'
                throw new Error(msg)
            }
        }
    ],
    // `onUploadProgress`允许处理上传的进度事件
    onUploadProgress: function (progressEvent) {
        // 使用本地 progress 事件做任何你想要做的
    },
    // `onDownloadProgress`允许处理下载的进度事件
    onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },
})

function host(): string {
    if (window.location.hostname == "localhost" || window.location.hostname.indexOf('192.168') > -1) {
        return "/api/"                //代理
    } else {
        return "/api/"
    }
}

// http request 拦截器
ax.interceptors.request.use(
    config => {
        if (store.state.jwtToken) {
            config.headers.Authorization = `Bearer ${store.state.jwtToken}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
ax.interceptors.response.use(
    response => {
        if (!response.data.success) {


            MessageBox.alert(response.data.errorMessage, '提示', {
                confirmButtonText: '确定'
            })



            // throw response;
        } else {
            return response.data
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
         
            }
        }
        MessageBox.alert('网络开小差了，请稍后再试', '提示', {
            confirmButtonText: '确定'
        })
        return Promise.reject(error.response.data)
    });

/* 手动取消请求的不显示报错 */
function handleError(err) {
    // 如果是手动取消的请求，不显示错误信息
    console.log("handleError1", err)
    if (axios.isCancel(err)) {
        // console.log(err)
    } else {
        // bootbox.alert(err)
    }
}

/* GET  */
export function Get<T>(url, data): Promise<any> {
    // `params`是要与请求一起发送的URL参数
    // 必须是纯对象或URLSearchParams对象
    return ax
        .get(url, {
            params: data
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}

//下载excel
export function Download<T>(url, data): Promise<any> {
    return axios({
        baseURL: host(),
        url: url,
        params: data,
        headers: { 'Authorization': `Bearer ${store.state.jwtToken}` },
        method: 'get',
        responseType: 'blob'  //二进制流
    })
}


/* POST */
export function Post<T>(url, data): Promise<any> {
    return ax
        .post(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}
/* PUT */
export function Put<T>(url, data): Promise<any> {
    return ax
        .put(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}
/* PATCH */
export function Patch<T>(url, data): Promise<any> {
    return ax
        .patch(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}
/* DELETE */
export function Delete<T>(url, data): Promise<any> {
    return ax
        .delete(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}

