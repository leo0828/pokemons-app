var Fly = require("flyio/dist/npm/weex")
var fly = new Fly

fly.config.baseURL = 'https://pokeapi.co/api/v2/'


//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        console.log(response);
        if (response.data.code) {
            return Promise.reject({
                data: response.data,
                errMsg: response.data.result
            })
        }
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        console.log('原始错误信息：', err);
        const code = err.status
        const error = err.response
        var errMsg = ''
        switch (code) {
            case 1:
                errMsg = '请求超时'
            case 400:
                errMsg = '错误请求'
                break
            case 401:
                errMsg = '未授权'
                break;
            case 404:
                errMsg = '未找到请求资源'
                break;
            case 500:
                errMsg = '服务器错误'
                break
            default:
                errMsg = '未知错误'
                break;
        }
        console.log('分类错误信息：', errMsg);

        //发生网络错误后会走到这里
        return Promise.reject({
            data: error,
            errMsg: errMsg
        })
    }
)

export default fly