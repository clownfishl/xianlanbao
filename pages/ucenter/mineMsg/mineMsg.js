// pages/ucenter/mineMsg/mineMsg.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    actNav: 0,
    navList: ['未读', '已读', '全部'],
    curMsg: -1,
    msgList: [{
      isread: false,
      ispull: false,
      content: '订单号124567已经发货yijij是的精神可嘉交界'
    }, {
      isread: false,
      ispull: false,
      content: '订单号124567已经发货yijij是的精神可嘉交界'
    }, {
      ispull: false,
      isread: false,
      content: '订单号124567已经发货yijij是的精神可嘉交界'
    }]
  },
  clkNav: function(e) {
    this.setData({
      actNav: e.currentTarget.dataset.index
    })
  },
  readChange: function(e) {
    var that = this;
    // 请求已读，未读，全部消息
    var index = e.currentTarget.dataset.index;
    var msgread = 'msgList[' + index + '].isread';
    var msgpull = 'msgList[' + index + '].ispull';
    for (let i = 0; i < that.data.msgList.length; i++) {
      if (i !== index) {
        this.data.msgList[i].ispull = false;
        this.setData(this.data);
      }
    }
    this.setData({
      curMsg: index,
      [msgpull]: !this.data.msgList[index].ispull,
      [msgread]: true
    });
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

  }
})