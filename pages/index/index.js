//Page Object
//导入request请求工具类
Page({
    data: {

        tabs: [
            {
                id: 0,
                name: "最新动态",
                isactive: true
            },
            {
                id: 1,
                name: "通知公告",
                isactive: false
            },
            {
                id: 2,
                name: "文件下载",
                isactive: false
            }
        ],
        //轮播图数组
        swiperList: [
        ],
        newarticleList: [],
        noticearticleList: [],

    },
    //options(Object)
    onLoad: function (options) {
        wx.cloud.database().collection('article').get()
        .then(res=>{
            console.log("文章图片获取成功",res);
            this.setData({
                swiperList:res.data,
                newarticleList:res.data
            })
        })
        .catch(res=>{
            console.log("文章图片获取成功",res);
            
        })

        wx.showLoading({
            title: "加载中",

        });

        setTimeout(function () {
            wx.hideLoading();
        }, 2000)

    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    },
    /**
     * 获取轮播图
     */


    //tabs逻辑业务
    handletabsItemChange(e) {
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            tabs
        })
    },
    //滚动条触底逻辑
    /*
      1 滚动滚动条触底加载下一页数据
      2 判断有没有下一页数据
          1 获取总页数
          2 获取当前页码
          3 判断当前页码是都大于等于总页数
              表示没有下一页数据
      3 假设没有下一页数据弹出提示
      4 假设有下一页数据加载下一页数据
    */
    onReachBottom(e) {
        console.log("111");
    },

    onclick: function (e) {
        const {index}=e.currentTarget.dataset;
        console.log(index);
        if(index==0){
            wx.navigateTo({
              url: '../../pages/articleid_4/articleid_4',
            })
        }
    },
    downloadapplyfile(e){
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
    }
    
});