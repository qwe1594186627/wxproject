// pages/createexercise/createexercise.js
let app = getApp()
const db = wx.cloud.database
let inputprojectname = ''
let inputprojectwhatkinds = ''
let inputprojectschool = ''
let inputprojectlevel = ''
let inputprojectkind = ''
let inputprojectstime = ''
let inputprojectetime = ''
let inputprojectmajor = ''
let inputprojectmajor2 = ''
let inputprojectintro = ''
let inputprojectsturesearch = ''
let inputprojecttearesearch = ''
let inputprojecttearqpprov = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false,
    shows2: false,
    dateString: "",
    index0: 0,
    index1: 0,
    index2: 0,
    projectlevel: ['国家级', '省级', '校级'],
    projectkinds: ['一般项目', '重点项目'],
    projectwhatkinds: ['创新训练项目', '创新实践项目'],
    issubjectkind: [
      ['哲学', '经济学', '法学', '教育学', '文学', '历史学', '理学', '工学', '农学', '医学', '管理学', '艺术学'],
      ['哲学类']

    ],
    multiIndex: [0, 0],
    getinputprojectname: '',
    getinputprojectwhatkinds: '',
    getinputprojectschool: '',
    getinputprojectlevel: '',
    getinputprojectkind: '',
    getinputprojectstime: '',
    getinputprojectetime: '',
    getinputprojectmajor: '',
    getinputprojectmajor2: '',
    getinputprojectintro: '',
    getinputprojectsturesearch: '',
    getinputprojecttearesearch: '',
    getinputprojecttearqpprov: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pageinputprojectname = wx.getStorageSync('inputprojectname')
    let pageinputprojectwhatkinds = wx.getStorageSync('inputprojectwhatkinds')
    let pageinputprojectschool = wx.getStorageSync('inputprojectschool')
    let pageinputprojectlevel = wx.getStorageSync('inputprojectlevel')
    let pageinputprojectkind = wx.getStorageSync('inputprojectkind')
    let pageinputprojectstime = wx.getStorageSync('inputprojectstime')
    let pageinputprojectetime = wx.getStorageSync('inputprojectetime')
    let pageinputprojectmajor = wx.getStorageSync('inputprojectmajor')
    let pageinputprojectmajor2 = wx.getStorageSync('inputprojectmajor2')
    let pageinputprojectintro = wx.getStorageSync('inputprojectintro')
    let pageinputprojectsturesearch = wx.getStorageSync('inputprojectsturesearch')
    let pageinputprojecttearesearch = wx.getStorageSync('inputprojecttearesearch')
    let pageinputprojecttearqpprov = wx.getStorageSync('inputprojecttearqpprov')
    this.setData({
      getinputprojectname: pageinputprojectname,                      
      getinputprojectwhatkinds: pageinputprojectwhatkinds,
      getinputprojectschool: pageinputprojectschool,
      getinputprojectlevel: pageinputprojectlevel,
      getinputprojectkind: pageinputprojectkind,
      getinputprojectstime: pageinputprojectstime,
      getinputprojectetime: pageinputprojectetime,
      getinputprojectmajor: pageinputprojectmajor,
      getinputprojectmajor2: pageinputprojectmajor2,
      getinputprojectintro: pageinputprojectintro,
      getinputprojectsturesearch: pageinputprojectsturesearch,
      getinputprojecttearesearch: pageinputprojecttearesearch,
      getinputprojecttearqpprov: pageinputprojecttearqpprov,
    })
  },


  dateChange(e) {

    this.setData({
      dateString: e.detail.dateString
    })
  },



  bindMultiPickerColumnChange: function (e) {
    var data = {
      issubjectkind: this.data.issubjectkind,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.issubjectkind[1] = ['哲学类'];
            break;
          case 1:
            data.issubjectkind[1] = ['经济学类', '财政学类', '金融学类', '经济与贸易类'];
            break;
          case 2:
            data.issubjectkind[1] = ['法学类', '公安学类', '政治学类', '社会学类', '民族学类', '马克思主义学类'];
            break;
          case 3:
            data.issubjectkind[1] = ['教育学类', '体育学类'];
            break;
          case 4:
            data.issubjectkind[1] = ['中国语言文学类', '外国语言文学类', '新闻传播学类'];
            break;
          case 5:
            data.issubjectkind[1] = ['历史学类'];
            break;
          case 6:
            data.issubjectkind[1] = ['数学类', '物理学类', '化学类', '天文学类', '地理科学类', '大气科学类', '海洋科学类', '地质学类', '生物科学类', '心理学类', '统计学类'];
            break;
          case 7:
            data.issubjectkind[1] = ['力学类', '机械学类', '仪器学类', '材料类', '能源动力类', '电气类', '电子信息类', '自动化类', '计算机类', '土木类', '水利类', '测绘类', '化工与制药类', '地质类', '矿业类', '纺织类', '轻工类', '交通运输类', '海洋工程类', '航天航空', '兵器类', '核工程类', '农业工程类', '林业工程类', '环境科学与工程类', '生物医学工程类', '食品科学与工程类', '建筑学类', '安全科学与工程类', '生物工程类', '公安技术类'];
            break;
          case 8:
            data.issubjectkind[1] = ['林学类', '自然保护与环境生态类', '植物生产类', '动物生产类', '动物医学类', '水产学', '草学类'];
            break;
          case 9:
            data.issubjectkind[1] = ['基础医学', '临床医学', '口腔医学', '公共卫生与预防科学', '中医学类', '中西医结合类', '药学类', '法医学类', '护理学类'];
            break;
          case 10:
            data.issubjectkind[1] = ['公共管理类', '管理科学与工程类', '工商管理类', '农业经济管理类', '图书情报与档案管理类', '物流管理与工程类', '电子商务类', '工业工程类', '旅游管理类'];
            break;
          case 11:
            data.issubjectkind[1] = ['艺术学理论类', '音乐舞蹈学类', '戏剧与影视学类', '美术学类', '设计学类'];
            break;

        }
        data.multiIndex[1] = 0;
        break;

    }
    this.setData(data);
  },


  getinputprojectname(e) {
    inputprojectname = e.detail.value
  },
  bindPickerChange0(e) {
    this.setData({
      index0: e.detail.value
    })
    inputprojectwhatkinds = this.data.projectwhatkinds[e.detail.value]
    console.log(inputprojectwhatkinds);
  },
  inputcollege(e) {
    inputprojectschool = e.detail.value
    console.log(inputprojectschool);
  },

  bindPickerChange1: function (e) {

    this.setData({
      index1: e.detail.value
    })
    inputprojectlevel = this.data.projectlevel[e.detail.value]
    console.log(inputprojectlevel);
  },

  bindPickerChange2: function (e) {

    this.setData({
      index2: e.detail.value
    })
    inputprojectkind = this.data.projectkinds[e.detail.value]
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    inputprojectstime = e.detail.value
    console.log(inputprojectstime);
  },
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value
    })
    inputprojectetime = e.detail.value
  },

  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    inputprojectmajor = this.data.issubjectkind[0][this.data.multiIndex[0]]
    inputprojectmajor2 = this.data.issubjectkind[1][this.data.multiIndex[1]]
    console.log(inputprojectmajor, inputprojectmajor2);
  },

  inputprojectinfo(e) {

    inputprojectintro = e.detail.value

  },
  inputhostscience(e) {
    inputprojectsturesearch = e.detail.value
  },
  inputteacherscience(e) {
    inputprojecttearesearch = e.detail.value
  },
  inputteacherapprove(e) {
    inputprojecttearqpprov = e.detail.value
  },
  gotostudensandteachers: function () {
    wx.navigateTo({
      url: '../../pages/studensandteachers/studensandteachers'
    })
    wx.setStorageSync('inputprojectname', inputprojectname)
    wx.setStorageSync('inputprojectwhatkinds', inputprojectwhatkinds)
    wx.setStorageSync('inputprojectschool', inputprojectschool)
    wx.setStorageSync('inputprojectlevel', inputprojectlevel)
    wx.setStorageSync('inputprojectkind', inputprojectkind)
    wx.setStorageSync('inputprojectstime', inputprojectstime)
    wx.setStorageSync('inputprojectetime', inputprojectetime)
    wx.setStorageSync('inputprojectmajor', inputprojectmajor)
    wx.setStorageSync('inputprojectmajor2', inputprojectmajor2)
    wx.setStorageSync('inputprojectintro', inputprojectintro)
    wx.setStorageSync('inputprojectsturesearch', inputprojectsturesearch)
    wx.setStorageSync('inputprojecttearesearch', inputprojecttearesearch)
    wx.setStorageSync('inputprojecttearqpprov', inputprojecttearqpprov)
  },
  gotoapply: function () {
    wx.switchTab({
      url: '../../pages/apply/index'
    })
  },



})