// pages/catalog/catalog.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curnav: 1,
    curindex: 0,
    navlist: [{ //左侧用途列表
      id: 1,
      name: "电力电缆"
    }, {
      id: 2,
      name: "特种电缆"
    }, {
      id: 3,
      name: "海底电缆"
    }],
    curlist: [
      [{
        id: 1,
        slot_show1: false, // input搜索框的显示
        slot_show2: false,
        slot_show3: false,
        slot_show4: false,
        input_complete1: false, // input搜索弹出框的显示
        input_complete2: false,
        input_complete3: false,
        input_complete4: false,
        slot_content1: '', //选中内容的显示
        slot_content2: '',
        slot_content3: '',
        slot_content4: '',
        input_end1: [{ //弹出框搜索结果
          id: 1,
          name: "dsc"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end2: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end3: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end4: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        filter_brandlist: [{ //过滤品牌
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
        filter_modellist: [{ //过滤型号
          id: 1,
          name: "QW"
        }, {
          id: 2,
          name: "YU"
        }],
        filter_speclist: [{ //过滤规格
          id: 1,
          name: "H"
        }, {
          id: 2,
          name: "Q"
        }],
        filter_vmlist: [{ //过滤电压
          id: 1,
          name: "2000V"
        }, {
          id: 2,
          name: "eg"
        }],
        // 长度
        value: '',
        num: 1,
        unnormal: 'disabled',
      }],
      [{
        id: 2,
        slot_show1: false, // input搜索框的显示
        slot_show2: false,
        slot_show3: false,
        slot_show4: false,
        input_complete1: false, // input搜索弹出框的显示
        input_complete2: false,
        input_complete3: false,
        input_complete4: false,
        slot_content1: '', //选中内容的显示
        slot_content2: '',
        slot_content3: '',
        slot_content4: '',
        input_end1: [{ //弹出框搜索结果
          id: 1,
          name: "sdfd"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end2: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end3: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        input_end4: [{
          id: 1,
          name: "sdfv"
        }, {
          id: 2,
          name: "sdaacc"
        }, {
          id: 3,
          name: "sdaacc"
        }, {
          id: 4,
          name: "sdaacc"
        }],
        filter_brandlist: [{ //过滤品牌
          id: 1,
          name: "dsdfc"
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
        filter_modellist: [{ //过滤型号
          id: 1,
          name: "QW"
        }, {
          id: 2,
          name: "YU"
        }],
        filter_speclist: [{ //过滤规格
          id: 1,
          name: "H"
        }, {
          id: 2,
          name: "Q"
        }],
        filter_vmlist: [{ //过滤电压
          id: 1,
          name: "2000V"
        }, {
          id: 2,
          name: "eg"
        }],
        // 长度
        value: '',
        num: 1,
        unnormal: 'disabled',
      }]
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  selectNav: function(e) {
    var id = e.target.dataset.id;
    var index = parseInt(e.target.dataset.index);
    this.setData({
      curnav: id,
      curindex: index
    })
  },

  complete1: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete1 = true;
    this.data.curlist[this.data.curindex][0].input_complete2 = false;
    this.data.curlist[this.data.curindex][0].input_complete3 = false;
    this.data.curlist[this.data.curindex][0].input_complete4 = false;
    this.setData(this.data);
  },
  complete2: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete2 = true;
    this.data.curlist[this.data.curindex][0].input_complete1 = false;
    this.data.curlist[this.data.curindex][0].input_complete3 = false;
    this.data.curlist[this.data.curindex][0].input_complete4 = false;
    this.setData(this.data);
  },
  complete3: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete3 = true;
    this.data.curlist[this.data.curindex][0].input_complete1 = false;
    this.data.curlist[this.data.curindex][0].input_complete2 = false;
    this.data.curlist[this.data.curindex][0].input_complete4 = false;
    this.setData(this.data);
  },
  complete4: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete4 = true;
    this.data.curlist[this.data.curindex][0].input_complete1 = false;
    this.data.curlist[this.data.curindex][0].input_complete2 = false;
    this.data.curlist[this.data.curindex][0].input_complete3 = false;
    this.setData(this.data);
  },
  // // input弹出框的选中
  inputItemSelect1: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete1 = false;
    this.data.curlist[this.data.curindex][0].slot_show1 = true;
    this.data.curlist[this.data.curindex][0].slot_content1 = e.target.dataset.val;
    this.setData(this.data);
  },
  inputItemSelect2: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete2 = false;
    this.data.curlist[this.data.curindex][0].slot_show2 = true;
    this.data.curlist[this.data.curindex][0].slot_content2 = e.target.dataset.val;
    this.setData(this.data);
  },
  inputItemSelect3: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete3 = false;
    this.data.curlist[this.data.curindex][0].slot_show3 = true;
    this.data.curlist[this.data.curindex][0].slot_content3 = e.target.dataset.val;
    this.setData(this.data);
  },
  inputItemSelect4: function(e) {
    this.data.curlist[this.data.curindex][0].input_complete4 = false;
    this.data.curlist[this.data.curindex][0].slot_show4 = true;
    this.data.curlist[this.data.curindex][0].slot_content4 = e.target.dataset.val;
    this.setData(this.data);
  },
  // 选中品牌内容
  selected1: function(e) {
    this.data.curlist[this.data.curindex][0].slot_show1 = true;
    this.data.curlist[this.data.curindex][0].slot_content1 = e.target.dataset.val;
    this.setData(this.data);
  },
  selected2: function(e) {
    this.data.curlist[this.data.curindex][0].slot_show2 = true;
    this.data.curlist[this.data.curindex][0].slot_content2 = e.target.dataset.val;
    this.setData(this.data);
  },
  selected3: function(e) {
    this.data.curlist[this.data.curindex][0].slot_show3 = true;
    this.data.curlist[this.data.curindex][0].slot_content3 = e.target.dataset.val;
    this.setData(this.data);
  },
  selected4: function(e) {
    this.data.curlist[this.data.curindex][0].slot_show4 = true;
    this.data.curlist[this.data.curindex][0].slot_content4 = e.target.dataset.val;
    this.setData(this.data);
  },
  close1: function() {
    this.data.curlist[this.data.curindex][0].slot_show1 = false;
    this.setData(this.data);
  },
  close2: function() {
    this.data.curlist[this.data.curindex][0].slot_show2 = false;
    this.setData(this.data);
  },
  close3: function() {
    this.data.curlist[this.data.curindex][0].slot_show3 = false;
    this.setData(this.data);
  },
  close4: function() {
    this.data.curlist[this.data.curindex][0].slot_show4 = false;
    this.setData(this.data);
  },
  enter: function(e) {
    this.data.curlist[this.data.curindex][0].value = e.detail.value;
    this.setData(this.data);
  },
  // 最小长度
  minus: function(e) {
    var num = this.data.curlist[this.data.curindex][0].num;
    if (num > 1) {
      num = num - 5;
    }
    this.data.curlist[this.data.curindex][0].num = num;
    this.setData(this.data);
  },
  plus: function(e) {
    var num = this.data.curlist[this.data.curindex][0].num;
    num = Number(num) + 5;
    this.data.curlist[this.data.curindex][0].num = num;
    this.setData(this.data);
  },
  changevalue: function(e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.data.curlist[this.data.curindex][0].num = num;
    this.setData(this.data);
  },
  // 确定
  sure: function(e) {
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
        total: that.data.num
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
    this.setData(this.data);
  },
  // 重置
  reset: function() {
    var that = this;
    var index = this.data.curindex;
    that.data.curlist[index][0].slot_show1 = false;
    that.data.curlist[index][0].slot_content1 = '';
    that.data.curlist[index][0].slot_show2 = false;
    that.data.curlist[index][0].slot_content2 = '';
    that.data.curlist[index][0].slot_show3 = false;
    that.data.curlist[index][0].slot_content3 = '';
    that.data.curlist[index][0].slot_show4 = false;
    that.data.curlist[index][0].slot_content4 = '';
    that.data.curlist[index][0].num = 1;
    this.setData(this.data);
  },
})