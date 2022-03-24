// pages/uploadfile/uploadfile.js
let db = wx.cloud.database()
let dianziform = ''
let datainputprojectname = wx.getStorageSync('inputprojectname')
let datainputprojectwhatkinds = wx.getStorageSync('inputprojectwhatkinds')
let datainputprojectschool = wx.getStorageSync('inputprojectschool')
let datainputprojectlevel = wx.getStorageSync('inputprojectlevel')
let datainputprojectkind = wx.getStorageSync('inputprojectkind')
let datainputprojectstime = wx.getStorageSync('inputprojectstime')
let datainputprojectetime = wx.getStorageSync('inputprojectetime')
let datainputprojectmajor = wx.getStorageSync('inputprojectmajor')
let datainputprojectmajor2 = wx.getStorageSync('inputprojectmajor2')
let datainputprojectintro = wx.getStorageSync('inputprojectintro')
let datainputprojectsturesearch = wx.getStorageSync('inputprojectsturesearch')
let datainputprojecttearesearch = wx.getStorageSync('inputprojecttearesearch')
let datainputprojecttearqpprov = wx.getStorageSync('inputprojecttearqpprov')
let dataresearchpurpose = wx.getStorageSync('researchpurpose')
let dataresearchcontent = wx.getStorageSync('researchcontent')
let dataresearchnowcondiotion = wx.getStorageSync('researchnowcondiotion')
let datacreationandtrait = wx.getStorageSync('creationandtrait')
let datatechnology = wx.getStorageSync('technology')
let dataarragement = wx.getStorageSync('arragement')
let datagetservicemoney = wx.getStorageSync("getservicemoney")
let datagetcomputemoney = wx.getStorageSync('getcomputemoney')
let datagetenergymoney = wx.getStorageSync('getenergymoney')
let datagetmeetingmoney = wx.getStorageSync('getmeetingmoney')
let datagetarticlecmoney = wx.getStorageSync('getarticlecmoney')
let datagetpublishmoney = wx.getStorageSync("getpublishmoney")
let datagetdevicemoney = wx.getStorageSync("getdevicemoney")
let datagetdevice2money = wx.getStorageSync("getdevice2money")
let datagetmaterialsmoney = wx.getStorageSync("getmaterialsmoney")
let datapageteaopoin = wx.getStorageSync('teaopoin')
let datapageprofessopoin = wx.getStorageSync('professopoin')
let datapageschoolopoin = wx.getStorageSync('schoolopoin')
let datapageleadinput = wx.getStorageSync('leadinput')

let openid

let id = Number(Math.random().toString().substr(3, 5) + Date.now()).toString(36)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        getdianziform: ''
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
        this.setData({
            getdianziform: dianziform
        })
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
    gototeachersopinion: function () {
        wx.navigateTo({
            url: '../../pages/teachersopinion/teachersopinion'
        })
    },
    uploadapplytable: function (e) {
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFiles
                console.log(tempFilePaths);
                dianziform = tempFilePaths[0].name
                console.log(dianziform);
            }
        })
    },
    submitall(e) {
        db.collection('project').add({
                data: {
                    projectid: id,
                    username: openid,
                    projectname: datainputprojectname,
                    projectkind: datainputprojectwhatkinds,
                    projectschool: datainputprojectschool,
                    projectlevel: datainputprojectlevel,
                    projectwhatkind: datainputprojectkind,
                    starttime: datainputprojectstime,
                    endtime: datainputprojectetime,
                    whatsubjectandmajor: datainputprojectmajor + datainputprojectmajor2,
                    projectintroduction: datainputprojectintro,
                    onepersonresearch: datainputprojectsturesearch,
                    teachersprojet: datainputprojecttearesearch,
                    isteacherapprove: datainputprojecttearqpprov,
                    isapprove: false,
                    projetyear: '2022',

                }
            }).then(res => {
                db.collection('projectaccording').add({
                    data: {
                        projectid: id,
                        researchpurpose: dataresearchpurpose,
                        researchcontent: dataresearchcontent,
                        researchnowcondiotion: dataresearchnowcondiotion,
                        creationandtrait: datacreationandtrait,
                        technology: datatechnology,
                        arragement: dataarragement,
                        username: openid
                    }
                })
            }).then(res => {
                db.collection('budget').add({
                    data: {
                        projectid: id,
                        servicemoney: datagetservicemoney,
                        computemoney: datagetcomputemoney,
                        energymoney: datagetenergymoney,
                        meetingmoney: datagetmeetingmoney,
                        articlecmoney: datagetarticlecmoney,
                        publishmoney: datagetpublishmoney,
                        devicemoney: datagetdevicemoney,
                        device2money: datagetdevice2money,
                        materialsmoney: datagetmaterialsmoney,
                        username: openid
                    }
                })
            }).then(res => {
                db.collection('opinion').add({
                    data: {
                        projectid: id,
                        teacheropinion: datapageteaopoin,
                        professopoin: datapageprofessopoin,
                        schoolopoin: datapageschoolopoin,
                        leadinput: datapageleadinput,
                        username: openid
                    }
                })

            }).then(res => {
                db.collection('file').add({
                    data: {
                        projectid: id,
                        projectfile: dianziform,
                        username: openid
                    }
                })


            }).then(res => {
                db.collection('member').where({
                    username: openid
                }).update({
                    data: {
                        projectid: id
                    }
                })
            }).then(res => {
                db.collection('teachers').where({
                    username: openid
                }).update({
                    data: {
                        projectid: id
                    }
                })
            })

            .then(res => {
                db.collection('file').where({
                    username: openid
                }).get().then(res => {
                    dianziform = res.data
                    console.log(dianziform);
                    this.setData({
                        getdianziform: dianziform
                    })
                })
            })
            .then(res => {
                wx.showToast({
                    icon: 'success',
                    title: '提交成功',
                })
            })

        wx.setStorageSync('id', id)


    },
    dowloadapplytable(e) {
        wx.getSavedFileList({ // 获取文件列表
            success(res) {
                res.fileList.forEach((val, key) => { // 遍历文件列表里的数据
                    // 删除存储的垃圾数据
                    wx.removeSavedFile({
                        filePath: val.filePath
                    });
                })
            }
        })

        wx.downloadFile({
            url: 'https://obohe.com/i/2022/03/24/njvddb.doc',
            success: function (res) {
                const tempFilePath = res.tempFilePath;
                // 保存文件
                wx.saveFile({
                    tempFilePath,
                    success: function (res) {
                        const savedFilePath = res.savedFilePath;
                        // 打开文件
                        wx.openDocument({
                            filePath: savedFilePath,
                            success: function (res) {
                                console.log('打开文档成功')
                            },
                        });
                    },
                    fail: function (err) {
                        console.log('保存失败：', err)
                    }
                });
            },
            fail: function (err) {
                console.log('下载失败：', err);
            },

        })

    },
    gotoapply(e) {
        wx.switchTab({
            url: '../../pages/apply/index',
        })
    }


})