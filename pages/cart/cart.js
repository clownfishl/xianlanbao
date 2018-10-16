// pages/catalog/cart/cart.js
var app = getApp() ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    minusStatus: 'disable',
    cart:false,
    cartItem: []
  },
  //事件处理函数
  con_order: function () {
    wx.navigateTo({
      url: '../con_order/con_order'
    })
  },
  /*点击减号*/
  bindMinus: function (e) {
    // console.log(e.currentTarget);
    // console.log(this)
    var lid = e.target.dataset.lid;
    var index = e.target.dataset.index;
    console.log(index)
    console.log(lid)
    var num = this.data.cartItem[index].cartNum;
    var cartItem = this.data.cartItem;
    if (num >= 1) {
      this.data.cartItem[index].cartNum--;
    }else{return false;}
    
    this.setData({
      cartItem:cartItem
    })
  },
  /*点击加号*/
  bindPlus: function (e) {
    var lid = e.target.dataset.lid;
    var index = e.target.dataset.index;
    var num = this.data.cartItem[index].cartNum;
    var cartItem = this.data.cartItem;
    num++;
    this.data.cartItem[index].cartNum = num;
    console.log(index)
    console.log(lid)
      
    this.setData({
      cartItem: cartItem
    })

   
  },
  getNum:function(){
    var _that = this;
    //购物车数量减少或增加修改数据库数据
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var userId = app.globalData.userId;
    var that = this
    console.log("----" + userId)
    if (userId == null) {
      wx.showModal({
        title: '请登录',

        success: function (res) {
          if (res.confirm) {
            // console.log(res)
            wx.reLaunch({
              url: '../ucenter/ucenter',
            })

          } else if (res.cancel) {
            wx.reLaunch({
              url: '../index/index',
            })
          }
        }
      })


    } else {
      wx.request({
        url: app.globalData.cable+'/cart/getcart',
        data: {
          userId: userId,
        },
        dataType: "json",
        method: "get",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          // console.log(res)
          var obj = res.data.data;
          console.log(obj)
          that.setData({
            cartItem: res.data.data
          })
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})