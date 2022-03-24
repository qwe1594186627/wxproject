// pages/apllyaccording/applyaccording.js
let researchpurpose
let researchcontent
let researchnowcondiotion
let creationandtrait
let technology
let arragement

Page({

    /**
     * 页面的初始数据
     */
    data: {
        getresearchpurpose: '',
        getresearchcontent: '',
        getresearchnowcondiotion: '',
        getcreationandtrait: '',
        gettechnology: '',
        getarragement: '',
    },
    onLoad: function (options) {
        let researchpurpose = wx.getStorageSync('researchpurpose')
        let researchcontent = wx.getStorageSync('researchcontent')
        let researchnowcondiotion = wx.getStorageSync('researchnowcondiotion')
        let creationandtrait = wx.getStorageSync('creationandtrait')
        let technology = wx.getStorageSync('technology')
        let arragement = wx.getStorageSync('arragement')
        this.setData({
            getresearchpurpose: researchpurpose,
            getresearchcontent: researchcontent,
            getresearchnowcondiotion: researchnowcondiotion,
            getcreationandtrait: creationandtrait,
            gettechnology: technology,
            getarragement: arragement
        })
    },

    getpurpose(e) {
        researchpurpose = e.detail.value
        this.setData({
            getresearchpurpose: researchpurpose
        })
    },
    getcontent(e) {
        researchcontent = e.detail.value
    },
    getdevelopment(e) {
        researchnowcondiotion = e.detail.value
    },
    getcreation(e) {
        creationandtrait = e.detail.value
    },
    gettech(e) {
        technology = e.detail.value
    },
    getarrage(e) {
        arragement = e.detail.value
    },


    gotomoney: function (e) {
        wx.navigateTo({
            url: '../../pages/money/money',
        })
        wx.setStorage({
            key: "researchpurpose",
            data: researchpurpose
        })
        wx.setStorage({
            key: "researchcontent",
            data: researchcontent
        })
        wx.setStorage({
            key: "researchnowcondiotion",
            data: researchnowcondiotion
        })
        wx.setStorage({
            key: "creationandtrait",
            data: creationandtrait
        })
        wx.setStorage({
            key: "technology",
            data: technology
        })
        wx.setStorage({
            key: "arragement",
            data: arragement
        })
    },
    gotostudensandteachers: function () {
        wx.navigateTo({
            url: '../../pages/studensandteachers/studensandteachers'
        })
    },

})