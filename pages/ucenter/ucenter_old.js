//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: 'userMsg/userMsg'
    })
  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: 'userMsg/order_mana/order_mana'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      console.log("第一个判断存在userInfo");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("从回调中获取");
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // console.log("最后一步");
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
      //   }
      // })
    }
  },
  getUserInfo: function (e) {
    this.wxLogin();
    this.bindtest(e.detail);

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 登录
  wxLogin: function () {
    console.log("index页面开始登陆");
    wx.login({
      success: res => {
        console.log("登录成功");
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 张鑫杰新增
        console.log("res.code=====" + res.code);
        app.globalData.codey = res.code;
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc37a42075b6a6837&secret=06d4a2f3bea5d28f4322bc428d399136&js_code=' + res.code + '&grant_type=authorization_code',
            method: "POST",
            success: function (res) {
              console.log(res);
              console.log("开始打印openid");
              console.log(res.data.openid)
              app.globalData.sessionKey = res.data.session_key;
              console.log("保存后的sessionkey");
              console.log(app.globalData.sessionKey);
              // that.setData({oEwYo47T-L47N2z0Yhtgm3UTkzY0
              //   openid: res.data.openid
              // })
            }
          })
        }
      }
    })
  }
  ,
  bindtest: function (e) {
    console.log("输出传送数据");
    console.log(e);
    console.log(app.globalData.sessionKey);
    wx.request({
      url: 'http://localhost:8080/user/getUserInfo2',
      data: {
        encryptedData: e.encryptedData,
        sessionKey: app.globalData.sessionKey,
        iv: e.iv

      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("输出请求后的返回值");
        console.log(res);
      },
      fail: function (res) {
        // console.log(".....fail.....");
      }
    })
  }

})
