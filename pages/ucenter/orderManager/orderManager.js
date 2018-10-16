//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    status: '',
    curNav: 0,
    orderNav: [{
      name: '所有订单',
      type: '0'
    }, {
      name: '待付款',
      type: '3'
    }, {
      name: '待发货',
      type: '4'
    }, {
      name: '待评价',
      type: '5'
    }],
    noData: false,
    orderList: [{
      number: 123445,
      orderCom: '交易成功',
      orderClo: '交易关闭',
      orderPay: '买家已付款',
      orderContentList: [{
        brand: '远东电缆',
        model: 'BVR',
        scale: '3*1.15',
        voltage: '1.5KV'
      }],
      orderDetailList: [{
        long: 100,
        price: 800,
        nums: 100
      }],
      total: 4000
    }, {
      number: 123445,
      orderCom: '交易成功',
      orderContentList: [{
        brand: '远东电缆',
        model: 'BVR',
        scale: '3*1.15',
        voltage: '1.5KV'
      }, {
        brand: '远东电缆',
        model: 'BVR',
        scale: '3*1.15',
        voltage: '1.5KV'
      }],
      orderDetailList: [{
        long: 100,
        price: 800,
        nums: 100
      }],
      total: 4000
    }],

    // orderNum: [{
    //   id: 1,
    //   num: 123456
    // }]
    // hidden: true,
    page: 1,
    // status: 0,
    // limit: 20,
    isLoad: false,
    isOver: false, //是否还有请求的数据
  },
  onLoad: function(options) {
    var that = this
    // 页面跳转所携带的数据
    if (options != '') {
      this.setData({
        curNav: options.curNav
      })
    }
    // 显示数据加载过程
    // wx.showLoading({
    //   title: '正在加载中...'
    // })
    // 自定义模拟加载返回的数据
    // var orderLista = [{
    //   number: 123445,
    //   orderCom: '交易成功',
    //   orderClo: '交易关闭',
    //   orderPay: '买家已付款',
    //   orderContentList: [{
    //     brand: '远东电缆',
    //     model: 'BVR',
    //     scale: '3*1.15',
    //     voltage: '1.5KV'
    //   }],
    //   orderDetailList: [{
    //     long: 100,
    //     price: 800,
    //     nums: 100
    //   }],
    //   total: 4000
    // }, {
    //   number: 123445,
    //   orderCom: '交易成功',
    //   orderContentList: [{
    //     brand: '远东电缆',
    //     model: 'BVR',
    //     scale: '3*1.15',
    //     voltage: '1.5KV'
    //   }, {
    //     brand: '远东电缆',
    //     model: 'BVR',
    //     scale: '3*1.15',
    //     voltage: '1.5KV'
    //   }],
    //   orderDetailList: [{
    //     long: 100,
    //     price: 800,
    //     nums: 100
    //   }],
    //   total: 4000
    // }];
    // 页面初始化onload时加载页面数据
    // wx.request({
    //   url: 'http://shop.honaf.com/story',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method: 'POST',
    //   data: {
    //     type: this.data.curNav
    //   },
    //   success: function(res) {
    //     // 如果没有数据根据后台返回的参数判断noData为true
    //     console.log()
    //     that.setData({
    //       orderList: orderLista
    //     })
    //     wx.hideLoading();
    //   },
    //   fail: function() {
    //     console.log('请求失败');
    //   },
    //   complete: function(res) {
    //     if (res == null || res.data == null) {
    //       console.error('网络请求失败');
    //       return;
    //     }
    //   }
    // })
    // this.loadData('https://www.easy-mock.com/mock/5a053915adbeb55b90c470f2/table/info', {
    //   status: 0
    // }, function(res) {
    //如果列表长度大于0 则数组拼接，否则数组不变
    //   if (that.data.orderlist.length > 0) {
    //     var orderlist = that.data.orderlist.concat(res)
    //   } else {
    //     var orderlist = res
    //   }
    //   that.setData({
    //     orderlist: orderlist
    //   })
    // })
  },
  loadData: function(url, data, call) {
    var isOver = this.data.isOver
    var that = this
    console.log(isOver)
    if (!isOver) {
      var page = this.data.page
      var limit = this.data.limit
      var sessionKey = wx.getStorageSync('sessionKey')
      data.page = page
      data.sessionKey = sessionKey
      // app.ajax.reqGets(url, data, function(res) {
      //   console.log(res)
      //   if (res.length < limit) {
      //     that.setData({
      //       isOver: true
      //     })
      //   }
      //   that.setData({
      //     page: page + 1,
      //     hidden: true
      //   }, function() {
      //     call(res)
      //   })
      // })
    }

  },
  //事件处理函数
  OrderTypeChange: function(e) {
    var that = this;
    var status = e.target.dataset.type;
    that.setData({
      status: status,
      // page: 1,
      // orderList: [],
      curNav: e.target.dataset.index,
      // isOver: false
    })
    // that.loadData('https://www.easy-mock.com/mock/5a053915adbeb55b90c470f2/table/info', {
    //   type: type
    // }, function(res) {
    //   var orderlist = that.data.orderlist.concat(res)

    //   that.setData({
    //     orderlist: orderlist
    //   })
    // })

  },
  // //拨打电话号码
  // makePhone: function(e) {
  //   var phone = e.target.dataset.phone

  //   wx.makePhoneCall({
  //     phoneNumber: phone
  //   })
  // },
  // // PullDownRefresh: function () {
  // //   wx.stopPullDownRefresh()
  // // },
  pullUpLoad: function() {
    var isOver = this.data.isOver
    if (!isOver) {
      this.setData({
        isLoad: true
      })
    } else {
      this.setData({
        isLoad: false
      })
    }
    var that = this;
    var type = this.data.type
    this.loadData('https://www.easy-mock.com/mock/5a053915adbeb55b90c470f2/table/info', {
      type: type
    }, function(res) {
      console.log(that.data.orderlist)
      if (res.length > 0) {
        var orderlist = that.data.orderlist.concat(res)
      } else {
        var orderlist = that.data.orderlist
      }

      that.setData({
        orderlist: orderlist
      });
    })
  },


  deleteOrder: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '是否删除该记录?',
      success: function(res) {
        if (res.confirm) {
          var orderList = that.data.orderList;
          orderList.splice(index, 1);
          that.setData({
            orderList: orderList
          })
        }
      }
    })
  },
  // onPullDownRefresh: function() {
  //   this.setData({
  //     page: 1,
  //     array: []
  //   })
  //   var that = this
  //   var type = this.data.type
  //   this.loadData('https://www.easy-mock.com/mock/5a053915adbeb55b90c470f2/table/info', {
  //     type: type
  //   }, function(res) {
  //     that.setData({
  //       orderlist: res
  //     })
  //     setTimeout(function() {
  //       wx.stopPullDownRefresh()
  //     }, 0)
  //   })

  // },
  onReady: function() {}
})