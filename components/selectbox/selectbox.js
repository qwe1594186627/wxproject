// components/selectbox/selectbox.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show:false,
        selectData:['2022','2021','2019','2018','2017','2016'],
        index:0

    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectTap(){
            this.setData({
                show:!this.data.show
            })
        },
        optionTap(e){
            let Index=e.currentTarget.dataset.index;
            this.setData({
                index:Index,
                show:!this.data.show
            })
        }
    }
})
