// pages/search/index.js
const db=wx.cloud.database()
let searchkey=''
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articleList:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

       
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
    // 获取内容
    handleInput(e){
        console.log(e.detail.value);
        searchkey=e.detail.value
        
    },
    searchevent(){
        if( searchkey && searchkey.length>0){
            db.collection('article').where({
                articletitle:db.RegExp({
                    regexp:searchkey,
                    options:'i'
                })
            }).get()
            .then(res=>{
                console.log("搜索成功",res);
                this.setData({
                    articleList:res.data
                })
            })
            .catch(res=>{
                console.log("搜索失败",res);
            })
        }else{
            wx.showToast({
              title: '搜索词为空',
            })
        }
    }
})