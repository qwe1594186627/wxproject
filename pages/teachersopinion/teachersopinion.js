// pages/teachersopinion/teachersopinion.js
let teaopoin
let professopoin
let schoolopoin
let leadinput
Page({

    /**
     * 页面的初始数据
     */
    data: {
        getteaopoin: '',
        getprofessopoin: '',
        getschoolopoin: '',
        getleadinput: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let pageteaopoin = wx.getStorageSync('teaopoin' )
        let pageprofessopoin = wx.getStorageSync('professopoin' )
        let pageschoolopoin = wx.getStorageSync('schoolopoin' )
        let pageleadinput = wx.getStorageSync('leadinput' )
        this.setData({
            getteaopoin: pageteaopoin,
            getprofessopoin: pageprofessopoin,
            getschoolopoin: pageschoolopoin,
            getleadinput: pageleadinput
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

    getteaopoin(e) {
        teaopoin = e.detail.value
    },
    getprofessopoin(e) {
        professopoin = e.detail.value
    },
    getschoolopoin(e) {
        schoolopoin = e.detail.value
    },
    getleadinput(e) {
        leadinput = e.detail.value
    },
    gotomoney: function () {
        wx.navigateTo({
            url: '../../pages/money/money',
        })
    },
    gotouploadfile: function () {
        wx.navigateTo({
            url: '../../pages/uploadfile/uploadfile',
        })
        wx.setStorageSync('teaopoin', teaopoin)
        wx.setStorageSync('professopoin', professopoin)
        wx.setStorageSync('schoolopoin', schoolopoin)
        wx.setStorageSync('leadinput', leadinput)
    },
})