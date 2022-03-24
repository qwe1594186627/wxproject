// pages/quarterlymanagement/quarterlymanagement.js
let inputprojectprogress = ''
let mainsearch = ''
let reserchresult = ''
let inputprojectreport = ''
let inputprojectworkafter = ''
let projetcquaterfile = ''
// --------------------------------------
let getmainresearch = ''
let getmainresult = ''
let getquaterfile = ''

let getshowprojectname
let db = wx.cloud.database()

let quarrelprojectname
let quarrelprojectid
let openid

const _ = db.command
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectprojecaddtion: ['按计划进行', '进度提前', '进度滞后'],
        index: 0,
        mainresearch: '',
        mainresult: '',
        quaterfile: '',
        showprojectname:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.callFunction({
            name: 'getopenid',
            complete: res => {
                console.log(res);
                openid=res.result.openid
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
            getshowprojectname=res.data
            console.log(getshowprojectname);
            this.setData({
                showprojectname:getshowprojectname
            })
        })

        db.collection('project').where({
            username:openid
        }).get().then(res=>{
            quarrelprojectid=res.data
        })
        db.collection('project').where({
            username:openid
        }).get().then(res=>{
            quarrelprojectname=res.data
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
    gotoapply: function () {
        wx.switchTab({
            url: '../../pages/apply/index'
        })
    },
    bindchange: function (e) {
        this.setData({
            index: e.detail.value
        })
        inputprojectprogress = this.data.selectprojecaddtion[e.detail.value]

    },
    addmainresearch: function () {


        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                mainsearch = tempFilePaths[0].name
                console.log(mainsearch);
            }
        })


    },

    addmainresearch2: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                reserchresult = tempFilePaths[0].name
            }
        })

    },


    inputprojectreport(e) {
        inputprojectreport = e.detail.value
    },
    inputprojectworkafter(e) {
        inputprojectworkafter = e.detail.value
    },

    addmainresearch3: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                projetcquaterfile = tempFilePaths[0].name
            }
        })

    },

    submittodatabase(e) {

        if (inputprojectreport) {
            db.collection('quarterlymanagement').add({
                    data: {
                        projectid:quarrelprojectid[0].projectid,
                        projectname:quarrelprojectname[0].projectname,
                        projectprogress: inputprojectprogress,
                        projectmainresearch: mainsearch,
                        projetresearchfindings: reserchresult,
                        projectquarterlyreport: inputprojectreport,
                        projectlaterplan: inputprojectworkafter,
                        quarterlymanagementfile: projetcquaterfile,
                        username:openid
                    }
                }).then(res => {
                    
                    wx.showToast({
                        icon:'success',
                        title: '提交成功',
                    })
                    

                })
                .then(res => {
                    inputprojectprogress = null
                    mainsearch = null
                    reserchresult = null
                    inputprojectreport = null
                    inputprojectworkafter = null
                    projetcquaterfile = null

                })
                .then(res => {
                    db.collection('quarterlymanagement').where({
                        username:openid
                    }).get().then(res => {
                        console.log(res);
                        getmainresearch = res.data
                        console.log(getmainresearch);
                        this.setData({
                            mainresearch: getmainresearch
                        })
                    })

                    db.collection('quarterlymanagement').where({
                        username:openid
                    }).get().then(res => {
                        getmainresult = res.data
                        console.log(getmainresult);
                        this.setData({
                            mainresult: getmainresult
                        })
                    })

                    db.collection('quarterlymanagement').where({
                        username:openid
                    }).get().then(res => {
                        getquaterfile = res.data
                        console.log(getquaterfile);
                        this.setData({
                            quaterfile: getquaterfile
                        })
                    })

                })
        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空！',
            })
        }
    }



})