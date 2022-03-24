// pages/middlecheck/middlecheck.js
let db = wx.cloud.database()
let inputhaveresult
let inputprojectconclusion
let inputafterplan
let inputmoneyplan
let inputproblems
let inputdata
let inputmiddlecheckfile
// -------------------------------------------
let getexpdata
let getmiddlecheckfile

let getshowprojectname

let middleproject
let openid
Page({

    /**
     * 页面的初始数据
     */
    data: {
        expdata: '',
        middlecheckfile: '',
        showprojectname:''
    },
    onLoad: function (options) {
        wx.cloud.callFunction({
            name: 'getopenid',
            success: res => {
                console.log(res);
                openid=res.result.openid
                console.log(openid);
            }
        })
    },
    onShow:function (params) {
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
            middleproject=res.data
        })
    },
    getinputhaveresult(e) {
        inputhaveresult = e.detail.value
    },
    getinputprojectconclusion(e) {
        inputprojectconclusion = e.detail.value
    },
    getinputafterplan(e) {
        inputafterplan = e.detail.value
    },
    getinputmoneyplan(e) {
        inputmoneyplan = e.detail.value
    },
    getinputproblems(e) {
        inputproblems = e.detail.value
    },

    gotoapply: function () {
        wx.switchTab({
            url: '../../pages/apply/index'
        })
    },
    inputdata: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                inputdata = tempFilePaths[0].name
            }
        })
    },
    inputmiddlecheckfile: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                inputmiddlecheckfile = tempFilePaths[0].name
            }
        })
    },

    submitdatatodatabase(e) {
        
        if (inputhaveresult) {
            db.collection('middlecheck').add({
                    data: {
                        projectid: middleproject[0].projectid,
                        projectname: middleproject[0].projectname,
                        projectResultsachieved: inputhaveresult,
                        summaryofprojectprogress: inputprojectconclusion,
                        futureprojectplan: inputafterplan,
                        arrangementfunds: inputmoneyplan,
                        Problemsandsolutionsoftheproject: inputproblems,
                        Experimentalrawdata: inputdata,
                        middlefile: inputmiddlecheckfile,
                        username:openid,
                        isapprove: false,
                    }
                }).then(res => {
                    inputhaveresult = null,
                        inputprojectconclusion = null,
                        inputafterplan = null,
                        inputmoneyplan = null,
                        inputproblems = null,
                        inputdata = null,
                        inputmiddlecheckfile = null

                }).then(res => {
                    wx.showToast({
                        icon:'success',
                        title: '提交成功',
                    })
                })
                .then(res => {
                    db.collection('middlecheck').where({
                        username:openid
                    }).get().then(res => {
                        getexpdata = res.data
                        this.setData({
                            expdata: getexpdata
                        })
                    })

                    db.collection('middlecheck').where({
                        username:openid
                    }).get().then(res => {
                        getmiddlecheckfile = res.data
                        this.setData({
                            middlecheckfile: getmiddlecheckfile
                        })
                    })
                })
        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空',
            })
        }
    }
})