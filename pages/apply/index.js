// pages/apply/index.js
let getprojectxiangmuname
let getxiangmuyear
let getxiangmuname
let getmiddlexiangmuyear
let getmiddlexiangmuname
let getendxiangmuyear
let getendxiangmuname
let getresultxiangmuyear
let getresultxiangmuname


let inputnologin = true

let getfirstprojtectinfo
let getprojtectinfo
let getmemberinfo
let getmiddleprojtectinfo
let getendprojtectinfo
let getresultprojtectinfo

let getisapprovequarrel
let getisapprovemiddle
let getisapproveend

let getisapproveresultarticle
let getisapproveresultpatent
let getisapproveresultawards

const db = wx.cloud.database()
const _ = db.command

let getprojectopenid
let getquarrelopenid

let isprojectapprove
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //左侧菜单数据
        letfMenuList: [{
            id: 0,
            name: "项目管理",
            isactive: true,
            children: [{
                id: 0,
                name: "项目申报",
                childrenisactive: true
            }

            ]
        },

        {
            id: 1,
            name: "季度报告管理",
            isactive: false,
            children: [{
                id: 0,
                name: "填写季度报告",
                childrenisactive: false
            }]
        },

        {
            id: 2,
            name: "中期管理",
            isactive: false,
            children: [{
                id: 0,
                name: "填写执行计划书",
                childrenisactive: false
            },
            {
                id: 1,
                name: "填写中期检查",
                childrenisactive: false
            },
            ]

        },
        {
            id: 3,
            name: "结题管理",
            isactive: false,
            children: [{
                id: 0,
                name: "填报结题",
                childrenisactive: false
            },]
        },
        {

            id: 4,
            name: "成果管理",
            isactive: false,
            children: [{
                id: 0,
                name: "提交成果",
                childrenisactive: false
            },]
        },



        ],
        //被点击的左侧的菜单
        currentIndex: 0,
        nologin: true,

        firstprojtectinfo:'',
        // 获取项目表中的数据
        projtectinfo: '',
        // 获取成员表里的所有数据
        memberinfo: '',

        // 获取中期报告表中的数据
        middleprojtectinfo: '',
        // 获取结题报告表中的数据
        endprojtectinfo: '',
        //获取结果报告表中的数据
        resultprojtectinfo: '',


        isapproveproject:'',
        // 判断季度报告通过值
        isapprovequarrel: '',
        //判断中期报告是否已经通过审核
        isapprovemiddle: '',
        // 判断结题报告稿是否已经挺高审核
        isapproveend: '',
        // 判断结果报告是否已经通过审核
        isapproveresult: '',

        // 是否已经提交季度报告
        issubmitquarrel: '',
        // 是否已经提交中期报告稿
        issubmitmiddle: '',
        // 是否已经提交结题报告稿
        issubmitend: '',
        // 是否已经提交结果报告稿
        issubmitresultarticle: '',
        issubmitresultpatent: '',
        issubmitresultawards: '',

        // 是否展示编辑按钮(一开始是不展示，点击查询之后展示)
        isshowedit: false,
        isshowmiddleedot: false,
        isshowendedot: false,
        isshowresultedot: false,

        // 如果没有审核通过不能填写季度期中等报告
        isshowother:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let isinputnologin = wx.getStorageSync('inputnologin')
        console.log(isinputnologin);
        if (isinputnologin === false) {
            this.setData({
                nologin: false
            })
        } else {
            this.setData({
                nologin: true
            })
        }

        db.collection('project').where({
            projectname: _.eq(getprojectxiangmuname)
        }).get().then(res => {
            getfirstprojtectinfo = res.data
            this.setData({
                firstprojtectinfo: getfirstprojtectinfo
            })
            if(getfirstprojtectinfo[0].isapprove===false){
                this.setData({
                    isshowother:false
                })
            }else{
                this.setData({
                    isshowother:true
                })
            }
        }).then(res=>{
            getprojectxiangmuname=null
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
    handlebindclickselectchange(e) {
        const {
            index
        } = e.detail;
        let {
            letfMenuList
        } = this.data;
        letfMenuList.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            letfMenuList
        })
    },
    gotocreateexercise: function () {
        wx.navigateTo({
            url: '../../pages/createexercise/createexercise'
        })
    },
    gotobussinessexercise: function () {
        wx.navigateTo({
            url: '../../pages/bussinessexercise/bussinessexercise',

        })
    },
    gotobussinesspratice: function () {
        wx.navigateTo({
            url: '../../pages/bussinesspratice/bussinesspratice',
        })
    },
    gotoquarterlymanagement: function () {
        wx.navigateTo({
            url: '../../pages/quarterlymanagement/quarterlymanagement',
        })
    },
    gotomiddlecheck: function () {
        wx.navigateTo({
            url: '../../pages/middlecheck/middlecheck',
        })
    },
    gotoendmanager: function () {
        wx.navigateTo({
            url: '../../pages/endmanager/endmanager',
        })
    },
    gotoresultmanagement: function () {
        wx.navigateTo({
            url: '../../pages/resultmanagement/resultmanagement',
        })
    },
    gotoallresult: function () {
        wx.navigateTo({
            url: '../../pages/allresult/allresult',
        })
    },
    gotomine() {

        wx.switchTab({
            url: '../../pages/mine/index',
        })
        wx.setStorageSync('inputnologin', inputnologin)
    },
    projectxiangmuname(e) {
        getprojectxiangmuname = e.detail.value
    },
    xiangmuyear(e) {
        getxiangmuyear = e.detail.value
    },
    xiangmuname(e) {
        getxiangmuname = e.detail.value
        console.log(getxiangmuname);
    },
    middlexiangmuyear(e) {
        getmiddlexiangmuyear = e.detail.value
    },
    middlexiangmuname(e) {
        getmiddlexiangmuname = e.detail.value
    },
    endxiangmuyear(e) {
        getendxiangmuyear = e.detail.value
    },
    endxiangmuname(e) {
        getendxiangmuname = e.detail.value
    },
    resultxiangmuyear(e) {
        getresultxiangmuyear = e.detail.value
    },
    resultxiangmuname(e) {
        getresultxiangmuname = e.detail.value
    },

    searchprojectproject(e) {
        db.collection('project').where({
            projectname: _.eq(getprojectxiangmuname)
        }).get().then(res => {
            getfirstprojtectinfo = res.data
            this.setData({
                firstprojtectinfo: getfirstprojtectinfo
            })
            if(getfirstprojtectinfo[0].isapprove===false){
                this.setData({
                    isapproveproject:false
                })
            }else{
                this.setData({
                    isapproveproject:true
                })
            }
        }).then(res=>{
            getprojectxiangmuname=null
        })

    },
    searchproject(e) {
        if (getxiangmuname) {
            db.collection('project').where({
                projectname: _.eq(getxiangmuname),
            }).get().then(res => {
                console.log(res);
                getprojtectinfo = res.data
                this.setData({
                    projtectinfo: getprojtectinfo
                })
                getprojectopenid = res.data[0].username
                console.log(getprojectopenid);
            }).then(res => {
                getxiangmuname = null
                getxiangmuyear = null
            })

            db.collection('quarterlymanagement').where({
                username: getprojectopenid
            }).get().then(res => {
                console.log(res);
                if (res.data.length === 0) {
                    this.setData({
                        issubmitquarrel: false
                    })
                } else {
                    this.setData({
                        issubmitquarrel: true
                    })
                }

            })

            db.collection('member').where({
                isoneperson: true
            }).get().then(res => {
                getmemberinfo = res.data
                this.setData({
                    memberinfo: getmemberinfo
                })
            })

            this.setData({
                isshowedit: true
            })
        } else {
            wx.showToast({
                title: '内容为空',
                icon: 'error',
            });
        }

    },
    searchprojectmiddle(e) {
        if (getmiddlexiangmuname) {
            db.collection('project').where({
                projectname: _.eq(getmiddlexiangmuname)
            }).get().then(res => {
                getmiddleprojtectinfo = res.data
                this.setData({
                    middleprojtectinfo: getmiddleprojtectinfo
                })
                console.log(res);
            }).then(res => {
                getmiddlexiangmuname = null
                getmiddlexiangmuyear = null
            })

            db.collection('middlecheck').where({
                username: getprojectopenid
            }).get().then(res => {
                console.log(res);
                getisapprovemiddle = res.data
                console.log(getisapprovemiddle);
                if (res.data.length === 0) {
                    this.setData({
                        issubmitmiddle: false
                    })
                } else {
                    this.setData({
                        issubmitmiddle: true
                    })

                    if (getisapprovemiddle[0].isapprove === false) {
                        this.setData({
                            isapprovemiddle: false
                        })
                    } else {
                        this.setData({
                            isapprovemiddle: true
                        })

                    }
                }
            })

            this.setData({
                isshowmiddleedot: true
            })
        } else {
            wx.showToast({
                title: '内容为空',
                icon: 'error',
            });
        }


    },
    searchprojectend(e) {
        if (getendxiangmuname) {
            db.collection('project').where({
                projectname: _.eq(getendxiangmuname)
            }).get().then(res => {
                getendprojtectinfo = res.data
                this.setData({
                    endprojtectinfo: getendprojtectinfo
                })
                console.log(res);
            }).then(res => {
                getendxiangmuname = null
                getendxiangmuyear = null
            })

            db.collection('endmanagement').where({
                username: getprojectopenid
            }).get().then(res => {
                console.log(res);
                getisapproveend = res.data
                console.log(getisapproveend);
                if (res.data.length === 0) {
                    this.setData({
                        issubmitend: false
                    })
                } else {
                    this.setData({
                        issubmitend: true
                    })

                    if (getisapproveend[0].isapprove === false) {
                        this.setData({
                            isapproveend: false
                        })
                    } else {
                        this.setData({
                            isapproveend: true
                        })

                    }
                }
            })

            this.setData({
                isshowendedot: true
            })

        } else {
            wx.showToast({
                title: '内容为空',
                icon: 'error',
            });
        }


    },
    searchprojectresult(e) {
        if (getresultxiangmuname) {
            db.collection('project').where({
                projectname: _.eq(getresultxiangmuname)
            }).get().then(res => {
                getresultprojtectinfo = res.data
                this.setData({
                    resultprojtectinfo: getresultprojtectinfo
                })
            }).then(res => {
                getxiangmuname = null
                getxiangmuyear = null
            })

            db.collection('papercondition').where({
                username: getprojectopenid
            }).get().then(res => {
                getisapproveresultarticle = res.data
                if (res.data.length === 0) {
                    this.setData({
                        issubmitresultarticle: false
                    })
                } else {
                    this.setData({
                        issubmitresultarticle: true
                    })

                }
            })
            db.collection('patentcondition').where({
                username: getprojectopenid
            }).get().then(res => {

                getisapproveresultpatent = res.data
                if (getisapproveresultpatent.length === 0) {
                    this.setData({
                        issubmitresultpatent: false
                    })
                } else {
                    this.setData({
                        issubmitresultpatent: true
                    })

                }
            })
            db.collection('competitioncondition').where({
                username: getprojectopenid
            }).get().then(res => {
                getisapproveresultawards = res.data
                if (getisapproveresultawards.length === 0) {
                    this.setData({
                        issubmitresultawards: false
                    })
                } else {
                    this.setData({
                        issubmitresultawards: true
                    })

                }
            })

            this.setData({
                isshowresultedot: true
            })
        } else {
            wx.showToast({
                title: '内容为空',
                icon: 'error',
            });
        }

    }


})