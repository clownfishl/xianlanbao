// pages/ucenter/address/addressAdd/addressAdd.js
var flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isdefault: false,
    region: ['省', '市', '区'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    if (e.detail.value.name == "") {
      warn = "请填写您的姓名！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.phone))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.region == '省,市,区') {
      warn = "请选择收货区域";
    } else if (e.detail.value.addressDetail == '0') {
      warn = "请选择具体地址";
    } else {
      flag = true;
      wx.redirectTo({
        url: '../address?name=' + e.detail.value.name + "&phone=" + e.detail.value.phone + "&region=" + e.detail.value.region + "&addressDetail=" + e.detail.value.addressDetail + "&flag=" + flag + "&isdefault=" + e.detail.value.isdefault
        //？后面跟的是需要传递到下一个页面的参数

      });
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  },
  formReset: function() {},
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