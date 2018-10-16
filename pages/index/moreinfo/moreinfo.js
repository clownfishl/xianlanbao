// pages/index/moreinfo/moreinfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    brand: '品牌',
    model: '型号',
    scale: '规格',
    pushbrand: false,
    pushmodel: false,
    pushscale: false,
    brandlist: [{ //brandlist 弹出框下拉列表
      id: 1,
      name: "远东电缆"
    }, {
      id: 2,
      name: "无锡电缆"
    }, {
      id: 3,
      name: "特种"
    }, {
      id: 4,
      name: "无锡电缆"
    }],
    modellist: [{ //modellist 弹出框下拉列表
      id: 1,
      name: "bvr"
    }, {
      id: 2,
      name: "bvr"
    }, {
      id: 3,
      name: "bvr"
    }, {
      id: 4,
      name: "bvr"
    }],
    scalelist: [{ //scalelist 弹出框下拉列表
      id: 1,
      name: "3^7.15"
    }, {
      id: 2,
      name: "3^7.15"
    }, {
      id: 3,
      name: "3^7.15"
    }, {
      id: 4,
      name: "3^7.15"
    }],

    //  筛选列表
    isfilter: false, //控制筛选显示
    slot_show1: false, //控制input搜索框和选中列出的搜索词
    slot_show2: false,
    slot_show3: false,
    slot_show4: false,
    slot_content1: '', //控制选中的显示
    slot_content2: '',
    slot_content3: '',
    slot_content4: '',
    input_complete1: false, //控制input搜索弹出框的显示
    input_complete2: false,
    input_complete3: false,
    input_complete4: false,
    input_end1: [{ //控制筛选页面input框输入联想词汇的展示结果
      id: 1,
      name: "dsc"
    }, {
      id: 2,
      name: "sdaacc"
    }, {
      id: 3,
      name: "ssadsacc"
    }],
    input_end2: [{
      id: 1,
      name: "sdfv"
    }, {
      id: 2,
      name: "sdaacc"
    }, {
      id: 3,
      name: "ssadsacc"
    }, {
      id: 4,
      name: "ssadsacc"
    }],
    input_end3: [{
      id: 1,
      name: "sdfv"
    }, {
      id: 2,
      name: "sdaacc"
    }, {
      id: 3,
      name: "ssadsacc"
    }],
    input_end4: [{
      id: 1,
      name: "sdfv"
    }, {
      id: 2,
      name: "sdaacc"
    }, {
      id: 3,
      name: "ssadsacc"
    }],
    filter_brandlist: [{ // 控制筛选展示列表的数据
      id: 1,
      name: "dsc"
    }, {
      id: 2,
      name: "swdc"
    }, {
      id: 3,
      name: "dsc"
    }, {
      id: 4,
      name: "开始的念佛分类"
    }, {
      id: 5,
      name: "dsc"
    }, {
      id: 6,
      name: "swdc"
    }],
    filter_modellist: [{
      id: 1,
      name: "QW"
    }, {
      id: 2,
      name: "YU"
    }],
    filter_scalelist: [{
      id: 1,
      name: "H"
    }, {
      id: 2,
      name: "Q"
    }],
    filter_voltagelist: [{
      id: 1,
      name: "2000V"
    }, {
      id: 2,
      name: "eg"
    }],
    // 总长度填写
    value: '',
    num: 1,
    unnormal: 'disabled',
    // 地区选择器
    region: ['全部', '全部', '全部'],
    customItem: '全部',
    // 商品列表
    goodList: [{
      id: 1,
      isshow: true,
      brand: "远东电缆",
      model: 'WDZCN-KYJYP33',
      scale: 'H',
      voltage: '2000V',
      total: '10000米',
      total_img: [{
        src: '../../../static/images/index_star_active.png'
      }, {
        src: '../../../static/images/index_star_active.png'
      }, {
        src: '../../../static/images/index_star_active.png'
      }, {
        src: '../../../static/images/index_star_active.png'
      }, {
        src: '../../../static/images/index_star.png'
      }]
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options);
    // 带参数网络请求
    wx.request({
      url: '',
      method: 'POST',
      header: {
        // 'content-type': 'application/json'
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        searchcontent: that.data.search_content
      },
      success: function(res) {
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 点击出现下拉框
  pushBrand: function() {
    this.setData({
      pushbrand: !this.data.pushbrand,
      pushmodel: false,
      pushscale: false,
      isfilter: false
    })
  },
  pushModel: function() {
    this.setData({
      pushmodel: !this.data.pushmodel,
      pushbrand: false,
      pushscale: false,
      isfilter: false
    })
  },
  pushScale: function() {
    this.setData({
      pushscale: !this.data.pushscale,
      pushbrand: false,
      pushmodel: false,
      isfilter: false
    })
  },
  // 下拉列表的点击事件
  brandItem: function(e) {
    console.log(e.currentTarget.dataset.val)
    // wx.showLoading({
    //   title: '加载中',
    // });
    // wx.request({
    //   url: '',
    //   method: 'POST',
    //   // 请求头部
    //   header: {
    //     'content-type': 'application/json'
    //   },
    // data: {
    //   val: e.currentTarget.dataset.val
    // },
    //   success: function(res) {
    //     console.log(res.data);
    //     设置数据
    //     that.setData({
    //      goodList: res.data
    //     })
    //     wx.hideLoading();
    //   },
    //   fail: function() {

    //   },
    //   complete: function() {

    //   }
    // })
    this.data.pushbrand = false;
    this.setData(this.data);
  },
  modelItem: function(e) {
    //网络请求
    this.data.pushmodel = false;
    this.setData(this.data);
  },
  scaleItem: function(e) {
    //网络请求
    this.data.pushsacle = false;
    this.setData(this.data);
  },



  // 点击筛选时
  filter: function() {
    this.setData({
      isfilter: !this.data.isfilter,
      pushscale: false,
      pushbrand: false,
      pushmodel: false,
    })
  },
  // input搜索框输入完成时
  complete1: function(e) {
    this.setData({
      input_complete1: true,
      input_complete2: false,
      input_complete3: false,
      input_complete4: false,
    })
  },
  complete2: function(e) {
    this.setData({
      input_complete2: true,
      input_complete1: false,
      input_complete3: false,
      input_complete4: false,
    })
  },
  complete3: function(e) {
    this.setData({
      input_complete3: true,
      input_complete1: false,
      input_complete2: false,
      input_complete4: false,
    })
  },
  complete4: function(e) {
    this.setData({
      input_complete4: true,
      input_complete1: false,
      input_complete2: false,
      input_complete3: false,
    })
  },
  // input弹出框内容的选中
  inputItemSelect1: function(e) {
    this.setData({
      input_complete1: false,
      slot_show1: true,
      slot_content1: e.target.dataset.val
    })
  },
  inputItemSelect2: function(e) {
    this.setData({
      input_complete2: false,
      slot_show2: true,
      slot_content2: e.target.dataset.val
    })
  },
  inputItemSelect3: function(e) {
    this.setData({
      input_complete3: false,
      slot_show3: true,
      slot_content3: e.target.dataset.val
    })
  },
  inputItemSelect4: function(e) {
    this.setData({
      input_complete4: false,
      slot_show4: true,
      slot_content4: e.target.dataset.val
    })
  },
  // 选中品牌内容
  selected1: function(e) {
    this.setData({
      slot_show1: true,
      slot_content1: e.target.dataset.val
    })
  },
  selected2: function(e) {
    this.setData({
      slot_show2: true,
      slot_content2: e.target.dataset.val
    })
  },
  selected3: function(e) {
    this.setData({
      slot_show3: true,
      slot_content3: e.target.dataset.val
    })
  },
  selected4: function(e) {
    this.setData({
      slot_show4: true,
      slot_content4: e.target.dataset.val
    })
  },
  close1: function() {
    this.setData({
      slot_show1: false
    })
  },
  close2: function() {
    this.setData({
      slot_show2: false
    })
  },
  close3: function() {
    this.setData({
      slot_show3: false
    })
  },
  close4: function() {
    this.setData({
      slot_show4: false
    })
  },
  enter: function(e) {
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  // 最小长度
  minus: function(e) {
    var num = this.data.num;
    if (num > 1) {
      num = num - 5;
    }
    this.setData({
      num: num
    })
  },
  plus: function(e) {
    var num = this.data.num;
    num = Number(num) + 5;
    this.setData({
      num: num
    })
  },
  changevalue: function(e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },
  // 发货地
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 筛选确定
  filterSure: function(e) {
    var that = this;
    this.data.isfilter = false;
    // wx.showLoading({
    //   title: '玩命加载中',
    // })
    wx.request({
      url: '',
      method: 'POST',
      // 请求头部
      header: {
        // 'content-type': 'application/x-www-form-urlencoded',
        'content-type': 'application/json'
      },
      data: {
        brand: that.data.slot_content1,
        model: that.data.slot_content2,
        scale: that.data.slot_content3,
        voltage: that.data.slot_content4,
        total: that.data.num,
        region: that.data.region
      },
      success: function(res) {
        console.log(res.data);
        // 设置数据
        that.setData({

        })
        // wx.hideLoading();
      },
      fail: function() {

      },
      complete: function() {

      }
    })
  },
  // 重置
  reset: function() {
    this.setData({
      slot_show1: false,
      slot_show2: false,
      slot_show3: false,
      slot_show4: false,
      slot_content1: '',
      slot_content2: '',
      slot_content3: '',
      slot_content4: '',
      num: 1,
      region: ['全部', '全部', '全部'],
    })
  }
})