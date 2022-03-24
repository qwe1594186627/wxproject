// pages/endmanager/endmanager.js
let inputprojetcbackword
let inputprojectcharacter
let inputteamwork
let inputresultsay
let inputplancondition
let inputconclusion
let inputpayformoney

let getshowprojectname

let db = wx.cloud.database()

let endproject
let openid
Page({

    /**
     * 页面的初始数据
     */
    data: {
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
            endproject=res.data
        })
    },
    getinputprojetcbackword(e) {
        inputprojetcbackword = e.detail.value
    },
    getinputprojectcharacter(e) {
        inputprojectcharacter = e.detail.value

    },
    getinputteamwork(e) {
        inputteamwork = e.detail.value

    },
    getinputresultsay(e) {
        inputresultsay = e.detail.value

    },
    getinputplancondition(e) {
        inputplancondition = e.detail.value

    },
    getinputconclusion(e) {
        inputconclusion = e.detail.value

    },
    getinputpayformoney(e) {
        inputpayformoney = e.detail.value

    },

    gotoapply: function () {
        wx.switchTab({
            url: '../../pages/apply/index'
        })
    },
    submittodatabase(e) {
       
        if (inputprojetcbackword) {
            db.collection('endmanagement').add({
                    data: {
                        projectid: endproject[0].projectid,
                        projectname: endproject[0].projectname,
                        backgroundandmeaning: inputprojetcbackword,
                        creationandtraits: inputprojectcharacter,
                        teamwork: inputteamwork,
                        resultbriefintroduction: inputresultsay,
                        precedentconductcondition: inputplancondition,
                        summaryofprojet: inputconclusion,
                        Expensereimbursement: inputpayformoney,
                        username:openid,
                        isapprove:false,
                    }
                }).then(res=>{
                    wx.showToast({
                        icon:'success',
                        title: '提交成功',
                    })
                })
                .then(res => {
                    inputprojetcbackword=null,
                    inputprojectcharacter=null,
                    inputteamwork=null,
                    inputresultsay=null,
                    inputplancondition=null,
                    inputconclusion=null,
                    inputpayformoney=null
                })
        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空！',
            })
        }
    }
})