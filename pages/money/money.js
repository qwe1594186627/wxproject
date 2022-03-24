// pages/money/money.js
let getservicemoney
let getcomputemoney
let getenergymoney
let getmeetingmoney
let getarticlecmoney
let getpublishmoney
let getdevicemoney
let getdevice2money
let getmaterialsmoney

Page({

    data: {
        servicemoney:'',
        computemoney: '',
        energymoney: '',
        meetingmoney: '',
        articlecmoney: '',
        publishmoney:'',
        devicemoney:'',
        device2money:'',
        materialsmoney:'',
    },

    onLoad: function (options) {
        let pagegetservicemoney = wx.setStorageSync("getservicemoney")
        let pagegetcomputemoney = wx.getStorageSync('getcomputemoney')
        let pagegetenergymoney = wx.getStorageSync('getenergymoney')
        let pagegetmeetingmoney = wx.getStorageSync('getmeetingmoney')
        let pagegetarticlecmoney = wx.getStorageSync('getarticlecmoney')
        let pagegetpublishmoney = wx.setStorageSync("getpublishmoney")
        let pagegetdevicemoney = wx.setStorageSync("getdevicemoney")
        let pagegetdevice2money = wx.setStorageSync("getdevice2money")
        let pagegetmaterialsmoney = wx.setStorageSync("getmaterialsmoney")
        this.setData({
            servicemoney:pagegetservicemoney,
            computemoney: pagegetcomputemoney,
            energymoney: pagegetenergymoney,
            meetingmoney: pagegetmeetingmoney,
            articlecmoney: pagegetarticlecmoney,
            publishmoney:pagegetpublishmoney,
            devicemoney:pagegetdevicemoney,
            device2money:pagegetdevice2money,
            materialsmoney:pagegetmaterialsmoney,
        })
    },
    servicemoney(e) {
        getservicemoney = e.detail.value
    },
    computemoney(e) {
        getcomputemoney = e.detail.value
    },
    energymoney(e) {
        getenergymoney = e.detail.value
    },
    meetingmoney(e) {
        getmeetingmoney = e.detail.value
    },
    articlecmoney(e) {
        getarticlecmoney = e.detail.value
    },
    publishmoney(e) {
        getpublishmoney = e.detail.value
    },
    devicemoney(e) {
        getdevicemoney = e.detail.value
    },
    device2money(e) {
        getdevice2money = e.detail.value
    },
    materialsmoney(e) {
        getmaterialsmoney = e.detail.value
    },
    gotoapplyaccording: function () {
        wx.navigateTo({
            url: '../../pages/apllyaccording/applyaccording'
        })
    },

    gototeachersopinion: function () {
        wx.navigateTo({
            url: '../../pages/teachersopinion/teachersopinion'
        })
        wx.setStorageSync("getservicemoney",getservicemoney)
        wx.setStorageSync("getcomputemoney", getcomputemoney)
        wx.setStorageSync("getenergymoney", getenergymoney)
        wx.setStorageSync("getmeetingmoney", getmeetingmoney)
        wx.setStorageSync("getarticlecmoney", getarticlecmoney)
        wx.setStorageSync("getpublishmoney", getpublishmoney)
        wx.setStorageSync("getdevicemoney", getdevicemoney)
        wx.setStorageSync("getdevice2money", getdevice2money)
        wx.setStorageSync("getmaterialsmoney", getmaterialsmoney)
    },


})