
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 定义返回值接口 包含状态码code、状态信息msg、内容data
export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}
// 定义返回状态码
export enum StatusCode {
    NoAuth = 600,
    Success = 200
}

// 获取token
export const getToken = () => {
    return sessionStorage.getItem('token')
}
// 清理session
export const cleanSession = () => {
    sessionStorage.clear();
}

// 封装的axios类request

class request {
    // axios实例
    private instance: AxiosInstance;
    // 构造函数
    constructor(config: AxiosRequestConfig) {
        // 1. 创建axios实例
        this.instance = axios.create(config);
        // 2. 拦截器
        this.interceptors();
    }
    // 拦截器
    private interceptors() {
        // request的拦截器：添加token
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            let token = getToken();
            if(token) {
                config.headers = {
                    ...config.headers,
                    token: token
                }
            }
            return config
        }, (error: any) => {
            error.data = {};
            error.data.msg = '服务器异常';
            return error
        })

        // response的拦截器
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            if(res && res.data) {
                const data = res.data;
                if(data.code === StatusCode.NoAuth) {
                    window.location.href = '/login';
                    cleanSession();
                } else if(data.code === StatusCode.Success || res.config.responseType === 'arraybuffer') {
                    console.log('通过拦截器', res.data);
                    return res
                } else {
                    ElMessage.error(data.msg || '服务器出错')
                    return res || null
                }
            }
        }, (error) => {
            if(error && error.response) {
                error.data = {};
                switch(error.response.status) {
                    case 400:
                        error.data.msg = ' 错误请求';
                        ElMessage.error(error.data.msg);
                        break
                    // ...
                    case 404:
                        error.data.msg = '未找到资源';
                        ElMessage.error(error.data.msg);
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg);
                }
            }
        }
        return Promise.reject(error)
    })
}

// GET请求
// get<T = any>(url: string, parms?: any): Promise<Result<T>> {
//     return new Promise()
// }
