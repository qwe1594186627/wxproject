        let studentname = ''
        let studentsex = ''
        let studentsno = ''
        let studentnation = ''
        let studentbirth = ''
        let studentcollege = ''
        let studentmajor = ''
        let studentclassname = ''
        let studentphone = ''
        let studentEmail = ''
        let studentwork = ''
        let studentduty = ''
        let isduty
        let db = wx.cloud.database()
        let getstuedentinfo = ''

        // -----------------------------------------------------------------------------------------------------------------
        let teachername = ''
        let teachernation = ''
        let teacherbirth = ''
        let teacherphone = ''
        let teacherEmail = ''
        let getteacherinfo = ''

        let studentsandteachersprojectid = wx.getStorageSync('id')

        let openid
        Page({

            data: {

                showModalStatus: false,
                showModalStatus2: false,
                index: 0,
                isconmmander: ['是', '否'],
                sex: [{
                        name: '男',
                        value: '男'
                    },
                    {
                        name: '女',
                        value: '女'
                    },
                ],
                stuedentinfo: '',
                teacherinfo: '',



            },

            onLoad: function (options) {
                wx.cloud.callFunction({
                    name: 'getopenid',
                    success: res => {
                        console.log(res);
                        openid = res.result.openid
                        console.log(openid);
                    }
                })
            },
            powerDrawer: function (e) {
                var currentStatu = e.currentTarget.dataset.statu;
                this.util(currentStatu)
            },

            powerDrawer2: function (e) {
                var currentStatu2 = e.currentTarget.dataset.statu;
                this.util2(currentStatu2)
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

            gotoapplyaccording: function () {
                wx.navigateTo({
                    url: '../../pages/apllyaccording/applyaccording',
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            },

            gotocreateexercise: function () {
                wx.navigateTo({
                    url: '../../pages/createexercise/createexercise'
                })
            },

            getstudentname(e) {
                // console.log(e);
                studentname = e.detail.value
                console.log(studentname);
            },
            studentsex(e) {

                studentsex = e.detail.value


                console.log(e);
            },
            studentsno(e) {

                studentsno = e.detail.value


            },
            studentnation(e) {

                studentnation = e.detail.value


            },
            studentbirth(e) {

                studentbirth = e.detail.value


            },
            studentcollege(e) {

                studentcollege = e.detail.value


            },
            studentmajor(e) {

                studentmajor = e.detail.value


            },
            studentclassname(e) {

                studentclassname = e.detail.value


            },
            studentphone(e) {

                studentphone = e.detail.value


            },
            studentEmail(e) {

                studentEmail = e.detail.value


            },
            studentwork(e) {

                studentwork = e.detail.value


            },
            bindPickerChange: function (e) {

                this.setData({
                    index : e.detail.value
                })
                
                studentduty = this.data.isconmmander[this.data.index]


            },

            // -----------------------------------------------------
            teachername(e) {
                teachername = e.detail.value
            },
            teachernation(e) {
                teachernation = e.detail.value
            },
            teacherbirth(e) {
                teacherbirth = e.detail.value
            },
            teacherphone(e) {
                teacherphone = e.detail.value
            },
            teacherEmail(e) {
                teacherEmail = e.detail.value
            },

            // ------------------------------------------------------------------------------
            formBindsubmit: function (e) {
                let user = wx.getStorageSync('user')
                console.log(user);
                console.log(studentname);
                if (studentduty == '是') {
                    isduty = true
                } else {
                    isduty = false
                }
                console.log(isduty);
                if (studentname) {
                    db.collection('member').add({
                        data: {
                            projectid: studentsandteachersprojectid,
                            name: studentname,
                            sex: studentsex,
                            sno: studentsno,
                            nation: studentnation,
                            birth: studentbirth,
                            college: studentcollege,
                            major: studentmajor,
                            class: studentclassname,
                            phone: studentphone,
                            email: studentEmail,
                            whatwork: studentwork,
                            isoneperson: isduty,
                            username: openid
                        }
                    }).then(res => {
                        wx.showToast({
                                icon: 'success',
                                title: '提交成功',
                            }).then(res => {
                                studentname = null
                                studentsex = null
                                studentsno = null
                                studentnation = null
                                studentbirth = null
                                studentcollege = null
                                studentmajor = null
                                studentclassname = null
                                studentphone = null
                                studentEmail = null
                                studentwork = null
                                studentduty = null
                            })
                            .then(res => {
                                db.collection('member').where({
                                    username: openid
                                }).get().then(res => {
                                    console.log('学生列表', res);
                                    getstuedentinfo = res.data
                                    console.log(getstuedentinfo);
                                    this.setData({
                                        stuedentinfo: getstuedentinfo
                                    })
                                })
                            })
                    })
                } else {
                    wx.showToast({
                        icon: 'error',
                        title: '内容为空！',
                    })
                }

            },

            getteacher: function (e) {
                if (teachername) {
                    db.collection('teachers').add({
                        data: {
                            projectid: studentsandteachersprojectid,
                            teachername: teachername,
                            teachernation: teachernation,
                            teachersbirth: teacherbirth,
                            teachersphone: teacherphone,
                            teachersemail: teacherEmail,
                            username: openid
                        }
                    }).then(res => {
                        wx.showToast({
                            icon: 'success',
                            title: '提交成功',
                        })
                        db.collection('teachers').where({
                            username: openid
                        }).get().then(res => {
                            console.log('老师列表', res);
                            getteacherinfo = res.data
                            console.log(getteacherinfo);
                            this.setData({
                                teacherinfo: getteacherinfo
                            })

                        })
                    })
                } else {
                    wx.showToast({
                        icon: 'error',
                        title: '内容为空！',
                    })
                }
            }


        })