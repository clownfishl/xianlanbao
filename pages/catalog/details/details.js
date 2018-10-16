// pages/catalog/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneInventory: [],
    joincart: false,
    animationData: {} //动画
  },
  buy: function() { //确认订单
    wx.navigateTo({
      url: '../con_order/con_order'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.inventory_id);
    this.get_date(options.inventory_id);
  },
  get_date: function(e) {
    var that = this;
    wx.request({
      url: '',
      data: {
        inventory_id: e
      },
      dataType: 'json',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function(res) {
        // if (res.statusCode == 200) {
        console.log("返回详情页数据成功");
        console.log(res.data);
        that.setData({
          oneInventory: res.data.inventory
        })

        // } else {
        //   console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
        // }
      },
      fail: function() {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function() {
        // complete
      }
    })
  },


  // 加入购物车
  joincart: function() {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 100,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(500).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      joincart: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  // 隐藏遮罩层
  hideModal: function(e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(500).step()
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        joincart: false
      })
    }, 200)
  },
  // 关闭弹出框
  close: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(500).step()
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        joincart: false
      })
    }, 200)
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