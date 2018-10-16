// pages/ucenter/complain/complain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIcon: '4',
    iconList: ['icon-xingxing1', 'icon-xingxing1', 'icon-xingxing1', 'icon-xingxing1', 'icon-xingxing1'],
    textareaVal: ''
  },
  inputChange: function(e) {
    this.setData({
      textareaVal: e.detail.value
    })
  },
  iconClick: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var tempiconList = this.data.iconList;
    for (let i = 0; i < tempiconList.length; i++) {
      if (i <= index) {
        tempiconList[i] = 'icon-xingxing1'
      } else {
        tempiconList[i] = 'icon-xingxing'
      }
    }
    this.setData({
      iconList: tempiconList, //重新赋值
      curIcon: index
    })
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