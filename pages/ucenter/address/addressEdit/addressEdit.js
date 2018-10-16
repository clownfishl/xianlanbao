// pages/ucenter/address/addressEdit/addressEdit.js
var flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '',
    name: '123',
    phone: '123',
    region: ['省', '市', '区'],
    customItem: '全部',
    addressDetail: '123',
    isdefault: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var editData = JSON.parse(options.editData);
    this.setData({
      index: options.index,
      name: editData.name,
      phone: editData.phone,
      region: editData.address,
      addressDetail: editData.addressDetail,
      isdefault: editData.isdefault
    })
  },
  selectDefault: function() {
    this.setData({
      isdefault: !this.data.isdefault
    })
  },
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit: function(e) {
    var that = this;
    var warn = "";
    var value = e.detail.value;
    if (value.name == "") {
      warn = "请填写您的姓名！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(value.phone))) {
      warn = "手机号格式不正确";
    } else if (value.region == '省,市,区') {
      warn = "请选择收货区域";
    } else if (value.addressDetail == '0') {
      warn = "请选择具体地址";
    } else {
      flag = true;
      wx.setStorage({
        key: 'address',
        data: {
          flag: flag,
          index: that.data.index,
          name: value.name,
          phone: value.phone,
          region: value.region,
          addressDetail: value.addressDetail,
          isdefault: that.data.isdefault
        },
        success: function() {
          wx.navigateBack(); //返回上一个页面
        }
      })
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);

    // var val = JSON.stringify(value);
    // if (value.name && value.phone && value.region && value.address && value.default) {
    //   wx.setStorage({
    //     key: 'address',
    //     data: value,
    //     success: function() {
    //       flag = true;
    //       wx.redirectTo({
    //         url: '../address?value=' + val + '&id=' + that.data.id,
    //       });
    //     }
    //   })
    // } else {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请填写完整资料',
    //     showCancel: false
    //   })
    // }
  },
  formReset: function(e) {
    console.log(e.detail.value);
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

  }
})