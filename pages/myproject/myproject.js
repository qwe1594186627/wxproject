// pages/myproject/myproject.js
let db=wx.cloud.database()
let openid
let getprojectinfo


Page({

    /**
     * 页面的初始数据
     */
    data: {
        projectinfo:'',
        
        
        
        
        
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
        db.collection('project').where({
            username:openid
        }).get().then(res=>{
            getprojectinfo=res.data
            this.setData({
                projectinfo:getprojectinfo
            })
        })
        
        
        
       
        

    },
    gotomine() {

        wx.switchTab({
            url: '../../pages/mine/index',
        })

    },
})