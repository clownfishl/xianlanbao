// pages/login/login.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issee: true,
    is_code: false, //验证码
    password: true,
    ispsd: false,
    ismsg: true,
    nums: '60',
    userphone: '',
    userpsd: '',
    useryz: ''
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
  // 密码显示
  toggleSee: function() {
    this.setData({
      password: !this.data.password
    })
  },
  // 密码登录
  psd_show: function(e) {
    this.setData({
      ismsg: false,
      ispsd: true
    })
  },
  //输入手机号
  getPhone: function(e) {
    var phone = e.detail.value;
    if (phone != '') {
      if (!(/^1[34578]\d{9}$/).test(phone)) {
        this.show("请输入正确的手机号");
      } else {
        this.setData({
          userphone: phone
        })
      }
    }
  },
  // 输入密码
  getPsd: function(e) {
    var psd = e.detail.value;
    if (psd != '') {
      if (!(/^[0-9a-zA-Z]{6,12}$/).test(psd)) {
        this.show("密码输入有误");
      }
    }
  },
  // 短信登录
  msg_show: function(e) {
    this.setData({
      ispsd: false,
      ismsg: true
    })
  },
  // 短信验证
  sendCode: function(e) {
    var that = this;
    var phone = this.data.userphone;
    if (phone == '') {
      this.show("请输入手机号");
      return
    }
    if (!(/^1[34578]\d{9}$/).test(phone)) {
      this.show("请输入正确的手机号");
      return
    }
    that.setData({
      is_code: true
    })
    var num = that.data.nums
    var code = setInterval(function() {
      if (num <= 1) {
        that.setData({
          is_code: false,
          nums: 60
        })
        clearInterval(code)
      } else {
        num--;
        that.setData({
          nums: num
        })
      }
    }, 1000)
  },
  // 表单提交
  formSubmit: function(e) {
    var that = this;
    var phone = e.detail.value.phone;
    var psd = e.detail.value.psd;
    var yzcode = e.detail.value.yzcode;
    if (this.data.ispsd) {
      if (phone.length == 0 || psd.length == 0) {
        this.show("手机号或密码不能为空");
      } else if (!(/^1[34578]\d{9}$/).test(phone) || !(/^[0-9a-zA-Z]{6,12}$/).test(psd)) {
        this.show("手机号或密码输入错误");
      } else {
        // wx.request({
        //   url: 'http://localhost:8000/admin',
        //   data: {
        //     username: this.data.userName,
        //     password: this.data.userPassword,
        //   },
        //   method: 'GET',
        //   success: function(res) {
        //     that.setData({
        //       id_token: res.data.id_token,
        //       response: res
        //     })
        //     try {
        //       wx.setStorageSync('id_token', res.data.id_token)
        //     } catch (e) {}
        //     wx.navigateTo({
        //       url: '../components/welcome/welcome'
        //     })
        //     console.log(res.data);
        //   },
        //   fail: function(res) {
        //     console.log(res.data);
        //     console.log('is failed')
        //   }
        // })
      }
    };
    if (this.data.ismsg) {
      if (phone.length == 0 || yzcode.length == 0) {
        this.show("手机号或验证码不能为空");
      } else if (!(/^1[34578]\d{9}$/).test(phone)) {
        this.show("手机号或验证码输入错误");
      } else {
        // wx.request({
        //   url: 'http://localhost:8000/admin',
        //   data: {
        //     username: this.data.userName,
        //     password: this.data.userPassword,
        //   },
        //   method: 'GET',
        //   success: function(res) {
        //     that.setData({
        //       id_token: res.data.id_token,
        //       response: res
        //     })
        //     try {
        //       wx.setStorageSync('id_token', res.data.id_token)
        //     } catch (e) {}
        //     wx.navigateTo({
        //       url: '../components/welcome/welcome'
        //     })
        //     console.log(res.data);
        //   },
        //   fail: function(res) {
        //     console.log(res.data);
        //     console.log('is failed')
        //   }
        // })
      }
    }
  },
  // 忘记密码
  forgetPsd: function() {

  },
  // 跳转注册
  register: function() {
    wx.navigateTo({
      url: '../register/register'
    })
  },
})