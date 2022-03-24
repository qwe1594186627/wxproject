// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'cloud1-7gwdf0420c8b81ef'
})

// 云函数入口函数
exports.main = async (event, context) => {
    return await wx.cloud.database().collection('member').get()
}