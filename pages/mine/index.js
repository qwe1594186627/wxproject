// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let user = wx.getStorageSync('user');
        console.log(user);
        this.setData({
            userInfo: user
        })
    },


    login: function () {
        wx.getUserProfile({
            desc: '必须授权才能使用',
            success: res => {
                let user = res.userInfo
                wx.setStorageSync('user', user);
                console.log('授权成功', user);

                this.setData({
                    userInfo: user
                })
                // ----------------------------------------------------------------
                let inputnologin = wx.getStorageSync('inputnologin')
                inputnologin = false
                wx.setStorageSync('inputnologin', inputnologin)
            },
            fail: res => {
                console.log('授权失败', res);
            }
        })

    },

    outlogin: function () {
        this.setData({
            userInfo: ''
        })
        wx.setStorageSync('user', null)
        let inputnologin = wx.getStorageSync('inputnologin')
        inputnologin = true
        wx.setStorageSync('inputnologin', inputnologin)
    },
    gotomyproject(e){
        wx.navigateTo({
          url: '../../pages/myproject/myproject',
        })
    },
    gotomystudents(e){
        wx.navigateTo({
            url: '../../pages/mystudents/mystudents',
          })
    },
    gotomyteachers(e){
        wx.navigateTo({
            url: '../../pages/myteachers/myteachers',
          })
    },
    gotomyaccording(e){
        wx.navigateTo({
            url: '../../pages/myaccording/myaccording',
          })
    },
    gotomymoney(e){
        wx.navigateTo({
            url: '../../pages/mymoney/mymoney',
          })
    },
    gotomyopoin(e){
        wx.navigateTo({
            url: '../../pages/myopoin/myopoin',
          })
    }

    
})