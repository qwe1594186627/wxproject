// pages/myopoin/myopoin.js
let db = wx.cloud.database()
let openid
let getopinioninfo

Page({

    /**
     * 页面的初始数据
     */
    data: {
        opinioninfo: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.callFunction({
            name: 'getopenid',
            complete: res => {
                console.log(res);
                openid = res.result.openid
                console.log(openid);
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        db.collection('opinion').where({
            username: openid
        }).get().then(res => {
            getopinioninfo = res.data
            this.setData({
                opinioninfo: getopinioninfo
            })
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    gotomine() {

        wx.switchTab({
            url: '../../pages/mine/index',
        })

    },
})