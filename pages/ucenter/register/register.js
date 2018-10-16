// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_code: false, //验证码
    nums: '60',
    userphone: '',
    usermsg: '',
    userpsd: '',
    userspsd: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用toast组件实例
    new app.ToastPannel();
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
  // 验证手机号
  getPhone: function(e) {
    var userphone = e.detail.value;
    if (userphone != '') {
      if (!(/^1[34578]\d{9}$/).test(userphone)) {
        this.show("请输入正确的手机号");
      }
    }
    this.setData({
      userphone: userphone
    })
  },
  // 发送验证码
  sendMsgCode: function(e) {
    var userphone = this.data.userphone;
    console.log(userphone);
    if (userphone == '') {
      this.show("请输入手机号");
      return;
    } else if (!(/^1[34578]\d{9}$/).test(userphone)) {
      this.show("请输入正确的手机号");
      return;
    } else {
      wx.request({

      });
    }
    this.setData({
      usermsg: usermsg
    })
  },
  // 验证密码
  getPsd: function(e) {
    var userphone = this.data.userpsd;
    var userpsd = e.detail.value;
    if (userpsd != '') {
      if (!(/^[0-9a-zA-Z]{6,12}$/).test(userpsd)) {
        this.show("请输入6-12位数字字母组合");
        return;
      }
    }
    this.setData({
      userpsd: userpsd
    })
  },
  // 确认密码
  getSpsd: function(e) {
    var userpsd = this.data.userpsd;
    var userspsd = e.detail.value;
    if (userspsd != '' && userspsd != userpsd) {
      this.show("两次密码不相同");
    }
    this.setData({
      userspsd: userspsd
    })
  },
  // 提交表单
  formSubmit: function(e) {
    var that = this;
    var userphone = e.detail.value.phone;
    var usermsg = e.detail.value.msgcode;
    var userpsd = e.detail.value.psd;
    var userspsd = e.detail.value.spsd;
    if (userphone.length == 0 || usermsg.length == 0 || userpsd.length == 0 || userspsd.length == 0) {
      that.show("手机号/验证码/密码不能为空");
      return;
    } else if (!(/^1[34578]\d{9}$/).test(userphone)) {
      that.show("手机号码输入错误");
    } else if (usermsg !== that.data.usermsg) {
      that.show("验证码输入错误");
    } else if (!(/^[0-9a-zA-Z]{6,12}$/).test(userpsd)) {
      that.show("密码格式错误");
      return;
    } else if (userspsd != that.data.userspsd) {
      that.show("两次密码不相同");
      return;
    } else {
      wx.request(options, cb);
    }
  },
  rlogin: function() {
    wx.navigateBack()
  },
})