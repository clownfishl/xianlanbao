// pages/index/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_content: '',
    hot_search: ['yjx', 'jsd', '0.6/kv', 'yjx', 'jsd', '0.6/kv', 'yjx', 'jsd', '0.6/kv']
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

  },
  searchContent: function(e) {
    this.setData({
      search_content: e.detail.value
    })
  },
  cancel: function(e) {
    this.setData({
      search_content: ''
    })
  },
  search: function(e) {
    if (this.data.search_content != '') {
      wx.navigateTo({
        url: '../search_result/search_result?search_content=' + this.data.search_content
      })
    }
  },
  toggleHotSearch: function(e) {
    var that = this;
    // 发送网络请求
    wx.request({
      url: '',
      data: {},
      success: function(res) {
        console.log(res.data);
        //that.setData({
        //  hot_search:res.data
        //})
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  selectSearch: function(e) {
    var val = e.currentTarget.dataset.val;
    this.setData({
      search_content: val
    })
  }
})