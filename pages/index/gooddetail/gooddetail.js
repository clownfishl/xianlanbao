// pages/index/gooddetail/gooddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: [{
      id: 1,
      brand: "远东电缆",
      model: 'WDZCN-KYJYP33',
      scale: '3*300+2*150',
      voltage: '2000',
      price: '5100',
      longList: [{
        type: 0,
        long: 100,
        sprice: 20,
        num: 78
      }]
    }]
  },
  toDetail: function() {
    wx.navigateTo({
      url: '../../catalog/details/details'
    })
  },
  toGoodDetail: function() {
    wx.navigateTo({
      url: '../../catalog/details/details'
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