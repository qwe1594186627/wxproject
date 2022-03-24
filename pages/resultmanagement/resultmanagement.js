// pages/resultmanagement/resultmanagement.js
let inputarticletitle
let inputartistname
let inputisprojectstudentindex
let inputselectsubjectkind
let inputisselectarticlekinds
let inputispublished
let inputmagazinename
let inputmagazineid
let inputpublishyear
let inputisprojectcombinedhangye
let inputisprojectcombinedplace
let inputisprojectcombinednation
let buttonfilewordpaper

let panduanarticleprojectstudent
let panduanarticlecombinedhangye
let panduanarticlecombinedplace
let panduanarticlecombinednation

// -------------------------------
let inputpatenttitle
let inputpatentname
let inputisprojectstudentindexpatent
let inputispatentkind
let inputselectpantentkind
let inputpatentid
let inputpatentappliername
let inputpatentapplydate
let inputselectpatentcondition
let inputgrantpatentid
let inputispatentyingyong
let inputispatentcombinedhangye
let buttonfilewordpatent

let panduanpantentprojectstudent
let panduanpantentyingyong
let panduanpantentcombinedhangye
// -----------------------------------------------------------
let inputawardsname
let inputawardersname
let inputawardskinds
let inputawardssubjectkinds
let inputawardslevel
let inputawardstime
let inputawardsorganzation
let buttonfilewordawards

let openid

let db = wx.cloud.database()

let resultproject


let getshowprojectname

Page({

    /**
     * 页面的初始数据
     */
    data: {
        showprojectname:'',
        isprojectstudent: ['是', '否'],
        issubjectkind: ['哲学', '经济学', '法学', '教育学', '文学', '历史学', '理学', '工学', '农学', '医学', '管理学', '艺术学'],
        isarticlekinds: ['科研', '教研'],
        ispatentcondition: ['申请', '授权'],
        isawardskinds: ['国际级', '国家级', '省级', '校级', '其他'],
        ispatentkind: ['发明专利', '实用新型专利', '外观设计专利', '软件著作权'],
        index1: 0,
        index2: 0,
        index3: 0,
        index4: 0,
        index5: 0,
        index6: 0,
        index7: 0,

        // ---------------------------------------------------------------------------------------
        index21: 0,
        index22: 0,
        index23: 0,
        index24: 0,
        index25: 0,
        index26: 0,

        // ----------------------------------------------------------------

        index31: 0,
        index32: 0,



        showModalStatus: false,
        showModalStatus2: false,
        showModalStatus3: false


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
            resultproject=res.data
        })
    },
    getinputarticletitle(e) {
        inputarticletitle = e.detail.value
    },
    getinputartistname(e) {
        inputartistname = e.detail.value
    },
    bindPickerChange1: function (e) {

        this.setData({
            index1: e.detail.value
        })
        inputisprojectstudentindex = this.data.isprojectstudent[e.detail.value]
        console.log(inputisprojectstudentindex);
    },
    bindPickerChange2: function (e) {

        this.setData({
            index2: e.detail.value
        })
        inputselectsubjectkind = this.data.issubjectkind[e.detail.value]
        console.log(inputselectsubjectkind);

    },
    bindPickerChange3: function (e) {
        this.setData({
            index3: e.detail.value
        })
        inputisselectarticlekinds = this.data.isarticlekinds[e.detail.value]
        console.log(e);
        console.log(inputisselectarticlekinds);

    },
    bindPickerChange4: function (e) {

        this.setData({
            index4: e.detail.value
        })
        inputispublished = this.data.isprojectstudent[e.detail.value]
        console.log(inputispublished);
    },
    getinputmagazinename(e) {
        inputmagazinename = e.detail.value
        console.log(inputmagazinename);
    },
    getinputmagazineid(e) {
        inputmagazineid = e.detail.value
        console.log(inputmagazineid);
    },
    getinputpublishyear(e) {
        inputpublishyear = e.detail.value
        console.log(inputpublishyear);
    },
    bindPickerChange5: function (e) {

        this.setData({
            index5: e.detail.value
        })
        inputisprojectcombinedhangye = this.data.isprojectstudent[e.detail.value]

    },
    bindPickerChange6: function (e) {

        this.setData({
            index6: e.detail.value
        })
        inputisprojectcombinedplace = this.data.isprojectstudent[e.detail.value]

    },
    bindPickerChange7: function (e) {

        this.setData({
            index7: e.detail.value
        })
        inputisprojectcombinednation = this.data.isprojectstudent[e.detail.value]


    },
    buttonfileword1: function (e) {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                buttonfilewordpaper = tempFilePaths[0].name
            }
        })


    },
    submitpaper() {
        if(inputisprojectstudentindex=='是'){
            panduanarticleprojectstudent=true
        }else{
            panduanarticleprojectstudent=false
        }
        if(inputisprojectcombinedhangye=='是'){
            panduanarticlecombinedhangye=true
        }else{
            panduanarticlecombinedhangye=true
        }
        if(inputisprojectcombinedplace=='是'){
            panduanarticlecombinedplace=true
        }else{
            panduanarticlecombinedplace=false
        }
        if(inputisprojectcombinednation=='是'){
           panduanarticlecombinednation=true
        }else{
            panduanarticlecombinednation=false
        }
        if (inputarticletitle) {
            db.collection('papercondition').add({
                    data: {
                        projectid: resultproject[0].projectid,
                        projectname: resultproject[0].projectname,
                        Thesistitle: inputarticletitle,
                        Authorsname: inputartistname,
                        Isthefirstauthorprojectmember: panduanarticleprojectstudent,
                        category: inputselectsubjectkind,
                        Thesiscategory: inputisselectarticlekinds,
                        Journalname: inputmagazinename,
                        serialnumbersofperiodicals: inputmagazineid,
                        Journalyear: inputpublishyear,
                        iscombinedwithindustry: panduanarticlecombinedhangye,
                        iscombinedwithplace: panduanarticlecombinedplace,
                        iscombinedwithnation: panduanarticlecombinednation,
                        resultfile: buttonfilewordpaper,
                        username:openid,
                        isapprove:false
                    }
                }).then(res=>{
                    wx.showToast({
                        icon: 'success',
                        title: '提交成功',
                    })
                })
                .then(res => {
                    wx.setStorageSync('inputarticletitle', inputarticletitle)
                    wx.setStorageSync('inputartistname', inputartistname)
                    wx.setStorageSync('inputisprojectstudentindex', inputisprojectstudentindex)
                    wx.setStorageSync('inputselectsubjectkind', inputselectsubjectkind)
                    wx.setStorageSync('inputisselectarticlekinds', inputisselectarticlekinds)
                    wx.setStorageSync('inputmagazinename', inputmagazinename)
                    wx.setStorageSync('inputmagazineid', inputmagazineid)
                    wx.setStorageSync('inputpublishyear', inputpublishyear)
                    wx.setStorageSync('inputisprojectcombinedhangye', inputisprojectcombinedhangye)
                    wx.setStorageSync('inputisprojectcombinedplace', inputisprojectcombinedplace)
                    wx.setStorageSync('inputisprojectcombinednation', inputisprojectcombinednation)
                    wx.setStorageSync('buttonfilewordpaper', buttonfilewordpaper)
                })
                .then(res => {
                    inputarticletitle = null
                    inputartistname = null
                    inputisprojectstudentindex = null
                    inputselectsubjectkind = null
                    inputisselectarticlekinds = null
                    inputispublished = null
                    inputmagazinename = null
                    inputmagazineid = null
                    inputpublishyear = null
                    inputisprojectcombinedhangye = null
                    inputisprojectcombinedplace = null
                    inputisprojectcombinednation = null
                    buttonfilewordpaper = null
                })
        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空',
            })
        }


    },
    // -----------------------------------------------------------------------------------------------------------------
    getinputpatenttitle(e) {
        inputpatenttitle = e.detail.value
    },
    getinputpatentname(e) {
        inputpatentname = e.detail.value
    },
    bindPickerChange21: function (e) {

        this.setData({
            index21: e.detail.value
        })
        inputisprojectstudentindexpatent = this.data.isprojectstudent[e.detail.value]
    },
    bindPickerChange22: function (e) {

        this.setData({
            index22: e.detail.value
        })
        inputispatentkind = this.data.ispatentkind[e.detail.value]
    },
    bindPickerChange23: function (e) {


        this.setData({
            index23: e.detail.value
        })
        inputselectpantentkind = this.data.issubjectkind[e.detail.value]

    },
    getinputpatentid(e) {
        inputpatentid = e.detail.value
    },
    getinputpatentappliername(e) {
        inputpatentappliername = e.detail.value
    },
    getinputpatentapplydate(e) {
        inputpatentapplydate = e.detail.value
    },
    bindPickerChange24: function (e) {

        this.setData({
            index24: e.detail.value
        })
        inputselectpatentcondition = this.data.ispatentcondition[e.detail.value]
    },
    getinputgrantpatentid(e) {
        inputgrantpatentid = e.detail.value
        console.log(inputgrantpatentid);
    },
    bindPickerChange25: function (e) {

        this.setData({
            index25: e.detail.value
        })
        inputispatentyingyong = this.data.isprojectstudent[e.detail.value]

    },
    bindPickerChange26: function (e) {

        this.setData({
            index26: e.detail.value
        })
        inputispatentcombinedhangye = this.data.isprojectstudent[e.detail.value]

    },
    buttonfileword2: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                buttonfilewordpatent = tempFilePaths[0].name
            }
        })


    },
    submitpatent() {
        if(inputisprojectstudentindexpatent=='是'){
            panduanpantentprojectstudent=true
        }else{
            panduanpantentprojectstudent=false
        }
        if(inputispatentyingyong=='是'){
            panduanpantentyingyong=true
        }else{
            panduanpantentyingyong=false
        }
        if(inputispatentcombinedhangye=='是'){
            panduanpantentcombinedhangye=true
        }else{
            panduanpantentcombinedhangye=false
        }
        if (inputpatenttitle) {
            db.collection('patentcondition').add({
                    data: {
                        projectid: resultproject[0].projectid,
                        projectname: resultproject[0].projectname,
                        patentname: inputpatenttitle,
                        InventorName: inputpatentname,
                        Isthefirstastudentoftheprojectteam: panduanpantentprojectstudent,
                        patenttype: inputispatentkind,
                        Disciplinecategory: inputselectpantentkind,
                        patentid: inputpatentid,
                        patentpeople: inputpatentappliername,
                        patentyear: inputpatentapplydate,
                        patentcondition: inputselectpatentcondition,
                        patentid2: inputgrantpatentid,
                        isapplication: panduanpantentyingyong,
                        iscombinedwithindustry: panduanpantentcombinedhangye,
                        patentfile: buttonfilewordpatent,
                        username:openid,
                        isapprove:false
                    }

                }).then(res=>{
                    wx.showToast({
                        icon: 'success',
                        title: '提交成功',
                    })
                })
                .then(res => {
                    wx.setStorageSync('inputpatenttitle', inputpatenttitle)
                    wx.setStorageSync('inputpatentname', inputpatentname)
                    wx.setStorageSync('inputisprojectstudentindexpatent', inputisprojectstudentindexpatent)
                    wx.setStorageSync('inputispatentkind', inputispatentkind)
                    wx.setStorageSync('inputselectpantentkind', inputselectpantentkind)
                    wx.setStorageSync('inputpatentid', inputpatentid)
                    wx.setStorageSync('inputpatentappliername', inputpatentappliername)
                    wx.setStorageSync('inputpatentapplydate', inputpatentapplydate)
                    wx.setStorageSync('inputselectpatentcondition', inputselectpatentcondition)
                    wx.setStorageSync('inputgrantpatentid', inputgrantpatentid)
                    wx.setStorageSync('inputispatentyingyong', inputispatentyingyong)
                    wx.setStorageSync('inputispatentcombinedhangye', inputispatentcombinedhangye)
                    wx.setStorageSync('buttonfilewordpatent', buttonfilewordpatent)
                })
                .then(res => {
                    inputpatenttitle = null
                    inputpatentname = null
                    inputisprojectstudentindexpatent = null
                    inputispatentkind = null
                    inputselectpantentkind = null
                    inputpatentid = null
                    inputpatentappliername = null
                    inputpatentapplydate = null
                    inputselectpatentcondition = null
                    inputgrantpatentid = null
                    inputispatentyingyong = null
                    inputispatentcombinedhangye = null
                    buttonfilewordpatent = null
                })
        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空',
            })
        }
    },
    // --------------------------------------------------------------

    getinputawardsname(e) {
        inputawardsname = e.detail.value
    },
    getinputawardersname(e) {
        inputawardersname = e.detail.value
    },
    bindPickerChange31(e) {
        this.setData({
            index31: e.detail.value
        })

        inputawardskinds = this.data.isawardskinds[e.detail.value]
    },
    bindPickerChange32(e) {
        this.setData({
            index32: e.detail.value
        })
        inputawardssubjectkinds = this.data.issubjectkind[e.detail.value]
    },
    getinputawardslevel(e) {
        inputawardslevel = e.detail.value

    },
    getinputawardstime(e) {
        inputawardstime = e.detail.value

    },
    getinputawardsorganzation(e) {
        inputawardsorganzation = e.detail.value
    },
    buttonfileword3: function () {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                buttonfilewordawards = tempFilePaths[0].name
            }
        })

    },
    submitawards() {
        
        if (inputawardsname) {
            db.collection('competitioncondition').add({
                    data: {
                        projectid: resultproject[0].projectid,
                        projectname: resultproject[0].projectname,
                        competitionname: inputawardsname,
                        Nameofwinner: inputawardersname,
                        rewardkind: inputawardskinds,
                        subject: inputawardssubjectkinds,
                        rewardlevel: inputawardslevel,
                        rewardtime: inputawardstime,
                        rewardorganization: inputawardsorganzation,
                        competitionfile: buttonfilewordawards,
                        username:openid,
                        isapprove:false
                    }
                }).then(res => {
                    wx.showToast({
                        icon: 'success',
                        title: '提交成功',
                    })
                }).then(res => {
                    wx.setStorageSync('inputawardsname', inputawardsname)
                    wx.setStorageSync('inputawardersname', inputawardersname)
                    wx.setStorageSync('inputawardskinds', inputawardskinds)
                    wx.setStorageSync('inputawardssubjectkinds', inputawardssubjectkinds)
                    wx.setStorageSync('inputawardslevel', inputawardslevel)
                    wx.setStorageSync('inputawardstime', inputawardstime)
                    wx.setStorageSync('inputawardsorganzation', inputawardsorganzation)
                    wx.setStorageSync('buttonfilewordawards', buttonfilewordawards)
                })
                .then(res => {
                    inputawardsname = null
                    inputawardersname = null
                    inputawardskinds = null
                    inputawardssubjectkinds = null
                    inputawardslevel = null
                    inputawardstime = null
                    inputawardsorganzation = null
                    buttonfilewordawards = null
                })

        } else {
            wx.showToast({
                icon: 'error',
                title: '内容为空',
            })
        }
    },
    // --------------------------------------------------------------------------------------------------
    powerDrawer: function (e) {
        var currentStatu = e.currentTarget.dataset.statu;
        this.util(currentStatu)
    },

    powerDrawer2: function (e) {
        var currentStatu2 = e.currentTarget.dataset.statu;
        this.util2(currentStatu2)
    },

    powerDrawer3: function (e) {
        var currentStatu3 = e.currentTarget.dataset.statu;
        this.util3(currentStatu3)
    },
    util: function (currentStatu) {
        /* 动画部分 */
        // 第1步：创建动画实例  
        var animation = wx.createAnimation({
            duration: 200, //动画时长 
            timingFunction: "linear", //线性 
            delay: 0 //0则不延迟 
        });

        // 第2步：这个动画实例赋给当前的动画实例 
        this.animation = animation;

        // 第3步：执行第一组动画 
        animation.opacity(0).rotateX(-100).step();

        // 第4步：导出动画对象赋给数据对象储存 
        this.setData({
            animationData: animation.export()
        })

        // 第5步：设置定时器到指定时候后，执行第二组动画 
        setTimeout(function () {
            // 执行第二组动画 
            animation.opacity(1).rotateX(0).step();
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
            this.setData({
                animationData: animation
            })

            //关闭 
            if (currentStatu == "close") {
                this.setData({
                    showModalStatus: false
                });
            }
        }.bind(this), 200)

        // 显示 
        if (currentStatu == "open") {
            this.setData({
                showModalStatus: true
            });
        }
    },
    util2: function (currentStatu2) {
        /* 动画部分 */
        // 第1步：创建动画实例  
        var animation = wx.createAnimation({
            duration: 200, //动画时长 
            timingFunction: "linear", //线性 
            delay: 0 //0则不延迟 
        });

        // 第2步：这个动画实例赋给当前的动画实例 
        this.animation = animation;

        // 第3步：执行第一组动画 
        animation.opacity(0).rotateX(-100).step();

        // 第4步：导出动画对象赋给数据对象储存 
        this.setData({
            animationData: animation.export()
        })

        // 第5步：设置定时器到指定时候后，执行第二组动画 
        setTimeout(function () {
            // 执行第二组动画 
            animation.opacity(1).rotateX(0).step();
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
            this.setData({
                animationData: animation
            })

            //关闭 
            if (currentStatu2 == "close") {
                this.setData({
                    showModalStatus2: false
                });
            }
        }.bind(this), 200)

        // 显示 
        if (currentStatu2 == "open") {
            this.setData({
                showModalStatus2: true
            });
        }
    },
    util3: function (currentStatu3) {
        /* 动画部分 */
        // 第1步：创建动画实例  
        var animation = wx.createAnimation({
            duration: 200, //动画时长 
            timingFunction: "linear", //线性 
            delay: 0 //0则不延迟 
        });

        // 第2步：这个动画实例赋给当前的动画实例 
        this.animation = animation;

        // 第3步：执行第一组动画 
        animation.opacity(0).rotateX(-100).step();

        // 第4步：导出动画对象赋给数据对象储存 
        this.setData({
            animationData: animation.export()
        })

        // 第5步：设置定时器到指定时候后，执行第二组动画 
        setTimeout(function () {
            // 执行第二组动画 
            animation.opacity(1).rotateX(0).step();
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
            this.setData({
                animationData: animation
            })

            //关闭 
            if (currentStatu3 == "close") {
                this.setData({
                    showModalStatus3: false
                });
            }
        }.bind(this), 200)

        // 显示 
        if (currentStatu3 == "open") {
            this.setData({
                showModalStatus3: true
            });
        }
    },
    gotoapply: function () {
        wx.switchTab({
            url: '../../pages/apply/index'
        })
    },
    showsubmit(e) {
        if (inputarticletitle) {
            wx.showToast({
                icon: 'success',
                title: '提交成功',
            })
        } else(
            wx.showToast({
                icon: 'error',
                title: '内容为空',
            })
        )

    }






})