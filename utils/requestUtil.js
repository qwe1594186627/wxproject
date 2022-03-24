//定义请求根路径baseUrl

/**
 * 
 * 返回请求跟路径baseUrl
 * 
 */
export const getBaseUrl=()=>{
    return baseUrl;
}

/**
 * 后端请求工具类
 * @param {*} params 
 * @returns 
 */
export const requestUtil = (params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success: (result) => {
               resolve(result.data)
            },
            fail:(err)=>{
                reject(err)
            }
        })
    });
}