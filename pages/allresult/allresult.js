// pages/allresult/allresult.js
let db=wx.cloud.database()
let getarticleinfo=''
let getpatentinfo=''
let getawardsinfo=''

let openid
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articleinfo:'',
        patentinfo:'',
        awardsinfo:''
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
        let showinputarticletitle=wx.getStorageSync('inputarticletitle')
        let showinputartistname=wx.getStorageSync('inputartistname')
        let showinputisprojectstudentindex=wx.getStorageSync('inputisprojectstudentindex')
        let showinputisselectarticlekinds=wx.getStorageSync('inputisselectarticlekinds')
        let showinputselectsubjectkind=wx.getStorageSync('inputselectsubjectkind')
        let showinputmagazinename=wx.getStorageSync('inputmagazinename')
        let showinputmagazineid=wx.getStorageSync('inputmagazineid')
        let showbuttonfilewordpaper=wx.getStorageSync('buttonfilewordpaper')
        // ----------------------------------------------------------------
        let showinputpatenttitle=wx.getStorageSync('inputpatenttitle')
        let showinputpatentname=wx.getStorageSync('inputpatentname')
        let showinputispatentkind=wx.getStorageSync('inputispatentkind')
        let showinputselectpantentkind=wx.getStorageSync('inputselectpantentkind')
        let showinputpatentid=wx.getStorageSync('inputpatentid')
        let showinputselectpatentcondition=wx.getStorageSync('inputselectpatentcondition')
        // ----------------------------------------------------------------------------------------
        let showinputawardsname=wx.getStorageSync('inputawardsname')
        let showinputawardersname=wx.getStorageSync('inputawardersname')
        let showinputawardskinds=wx.getStorageSync('inputawardskinds')
        let showinputawardssubjectkinds=wx.getStorageSync('inputawardssubjectkinds')
        let showinputawardslevel=wx.getStorageSync('inputawardslevel')
        let showinputawardstime=wx.getStorageSync('inputawardstime')
        let showinputawardsorganzation=wx.getStorageSync('inputawardsorganzation')
        let showbuttonfilewordawards=wx.getStorageSync('buttonfilewordawards')


        db.collection('papercondition').where({
            username:openid
        }).get().then(res=>{
            console.log(res);
            getarticleinfo=res.data
            console.log(getarticleinfo);
            this.setData({
                articleinfo:getarticleinfo
            })
        })

        db.collection('patentcondition').where({
            username:openid
        }).get().then(res=>{
            console.log(res);
            getpatentinfo=res.data
            console.log(getpatentinfo);
            this.setData({
                patentinfo:getpatentinfo
            })
        })

        db.collection('competitioncondition').where({
            username:openid
        }).get().then(res=>{
            console.log(res);
            getawardsinfo=res.data
            console.log(getawardsinfo);
            this.setData({
                awardsinfo:getawardsinfo
            })
        })
        

        
    },

   
    gotoapply:function(){
        wx.switchTab({
            url: '../../pages/apply/index'
        })
    }
})