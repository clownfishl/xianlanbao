//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inventory: [],
    // banner
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(225,225,225,0.3)',
    indicatorActiveColor: 'rgba(225,225,225,0.9)',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 线缆详情列表
    goodList: [{
      id: 1,
      brand: "远东电缆",
      model: 'WDZCN-KYJYP33',
      spec: '3*300+2*150',
      vm: '2000V',
      sum: '10000米',
      total_img: [{
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star.png'
      }]
    }, {
      id: 1,
      brand: "远东电缆",
      model: 'WDZCN-KYJYP33',
      spec: '3*300+2*150',
      vm: '2000V',
      sum: '10000米',
      total_img: [{
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star_active.png'
      }, {
        src: '../../static/images/index_star.png'
      }]
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  search_index: function() {
    wx.navigateTo({
      url: 'search/search'
    })

  },
  more: function() {
    wx.navigateTo({
      url: './moreinfo/moreinfo'
    })
  },
  details: function(e) {
    // wx.navigateTo({
    //   url: '../catalog/details/details?inventory_id=' + e.currentTarget.dataset.list
    // })
    wx.navigateTo({
      url: './gooddetail/gooddetail'
    })
  },
  // cart: function (e) {
  //   this.indexCart(e);
  //   wx.navigateTo({

  //     url: '../catalog/cart/cart'
  //   })
  // },
  rush_buy: function() {
    wx.navigateTo({
      url: '../catalog/con_order/con_order',
    })
  },
  more0: function() {
    wx.navigateTo({
      url: '../catalog/catalog',
    })
  },
  showok: function(e) {
    this.indexCart(e);
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function(e) {
    // 资讯轮播
    console.log(e.title);
    this.setData({
      inforList: [{
        url: "url",
        titlebig: "铜价涨幅",
        title: "国家关于增值税调整的通知"
      }, {
        url: "url",
        titlebig: "公告",
        title: "国家关于增值税调整的通知"
      }, {
        url: "url",
        titlebig: "公告",
        title: "国家关于增值税调整的通知"
      }]
    });

    this.get_date();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  indexCart: function(e) {
    console.log(888)

    var lid = e.target.dataset.lid;
    console.log("lid:" + lid)
    var userId = app.globalData.userId;
    console.log("userId:" + userId);
    var that = this;
    wx.request({
      url: app.globalData.cable + '/cart/save',
      data: {
        inventoryId: lid,
        userId: userId,
        num: 1
      },
      dataType: "json",
      method: "post",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        // console.log(res)
      }
    })
    console.log("hh==hhh")
  },


  get_date: function() {
    var that = this;
    console.log(888)
    wx.request({
      url: app.globalData.cable + '/user/getInventory',
      data: {},
      dataType: 'json',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function(res) {

        // if (res.statusCode == 200) {
        console.log("返回列表页数据成功");
        var obj = res.data.inventory;
        console.log(obj);
        that.setData({
          inventory: res.data.inventory
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //下拉刷新
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function() {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },


})