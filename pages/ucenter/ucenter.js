//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    islogin: true,
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "clownfishl"
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: 'userMsg/userMsg'
    })
  },
  bindViewTap1: function() {
    wx.navigateTo({
      url: 'userMsg/order_mana/order_mana'
    })
  },
  onLoad: function() {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
  },
  // 登录
  getUserInfo: function() {
    console.log("index页面开始登陆");
    var that = this;
    wx.login({
      success: res => {
        console.log("登录成功");

        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 张鑫杰新增
        console.log("res.code=====" + res.code);
        // app.globalData.codey = res.code;
        if (res.code) {
          //发起网络请求
          console.log("登录成功,开始获取个人信息解密");
          wx.getUserInfo({
            success: function(info) {
              console.log("encryptedData:" + info.encryptedData);
              console.log("code:" + res.code);
              console.log("iv :" + info.iv);
              wx.request({
                url: app.globalData.cable + '/user/getUserInfo2',
                data: {
                  encryptedData: info.encryptedData,
                  code: res.code,
                  iv: info.iv
                },
                method: 'post',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success: function(resource) {
                  console.log("输出请求后的返回值");
                  console.log(resource);
                  app.globalData.userId = resource.data.userId;
                  console.log(app.globalData.userId)
                  that.setData({
                    userInfo: resource.data.userInfo,
                    hasUserInfo: true

                  })
                },
                fail: function(res) {
                  console.log(".....fail.....");
                }
              })
            }
          })
        }
      }
    })
  },
  bindtest: function(e) {
    console.log("输出传送数据");
    console.log(e);
    console.log(app.globalData.sessionKey);
    wx.request({
      url: app.globalData.cable + '/user/getUserInfo2',
      data: {
        encryptedData: e.encryptedData,
        sessionKey: app.globalData.sessionKey,
        iv: e.iv

      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log("输出请求后的返回值");
        console.log(res);
      },
      fail: function(res) {
        // console.log(".....fail.....");
      }
    })
  }

})