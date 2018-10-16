// pages/ucenter/addres/address.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    addressData: [{
      id: 0,
      name: '王铁柱',
      phone: '17602543144',
      address: '江苏省南京市鼓楼区',
      addressDetail: '苏州路136号1幢1305',
      isdefault: false
    }, {
      id: 1,
      name: 'li铁柱',
      phone: '12345678901',
      address: '江苏省南京市鼓楼区',
      addressDetail: '苏州路136号1幢1305',
      isdefault: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.addressData);
    var flag = false; //判断是从哪个页面跳转过来
    console.log(options);
    var addressData = this.data.addressData;
    if (options.flag) {
      addressData.push({
        "id": options.index++,
        "name": options.name,
        "phone": options.phone,
        "address": options.region,
        "addressDetail": options.addressDetail,
        "isdefault": options.isdefault
      })
      this.setData({
        addressData: addressData
      })
    };
  },
  selectDefault: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var addressData = that.data.addressData;
    for (let i = 0; i < addressData.length; i++) {
      var defaul = 'addressData[' + i + '].isdefault'
      if (i == index) {
        this.setData({
          [defaul]: !addressData[i].isdefault
        })
      } else {
        addressData[i].isdefault = false;
        this.setData({
          addressData: addressData
        })
      }
    }
  },
  // 编辑
  addressEdit: function(e) {
    // 编辑时获得编辑地址的数据 传递给编辑页面，以确保可以编辑
    var index = e.currentTarget.dataset.index;
    var editData = JSON.stringify(this.data.addressData[index]);
    wx.navigateTo({
      url: './addressEdit/addressEdit?editData=' + editData + '&index=' + index,
    })
  },
  // 删除
  addressDelete: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      'title': '提示',
      'content': '确认删除该地址信息吗？',
      'cancelColor': '#0075c1',
      'confirmColor': '#0075c1',
      success: function(res) {
        if (res.confirm) {
          var addressData = that.data.addressData;
          addressData.splice(index, 1);
          that.setData({
            addressData: addressData
          })
        }
      }
    })
  },
  // deleteaddress(e) {
  //   let that = this;
  //   console.log(e);
  //   let deldeid = e.currentTarget.dataset.id;
  //   let allDatas = that.data.allData;
  //   let newallData = [];
  //   for (var i in allDatas) {
  //     var item = allDatas[i];
  //     if (item.id != deldeid) {
  //       newallData.push(item);
  //     }
  //   }
  //   console.log(newallData);
  //   wx.showModal({
  //     'content': '确认删除该地址信息吗？',
  //     'cancelColor': '#0076FF',
  //     'confirmColor': '#0076FF',
  //     success: function(res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定');
  //         let url = getApp().Api_url + '/receiver/delete';
  //         requestd._post(url, {
  //             receiverId: e.currentTarget.dataset.id
  //           },
  //           function(res2) {
  //             console.log(res2);
  //             if (res2.data.status == 1) {
  //               that.setData({
  //                 allData: newallData
  //               });
  //             } else {
  //               wx.showModal({
  //                 'showCancel': false,
  //                 'content': res2.data.message,
  //                 'confirmColor': '#0076FF'
  //               })
  //             }
  //           },
  //           function(res2) {});
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    var addressData = this.data.addressData;
    wx.getStorage({
      key: 'address',
      success: function(res) {
        // console.log(res);
        var region = res.data.region.replace(/全部|,/g, '');
        addressData[res.data.index].name = res.data.name;
        addressData[res.data.index].phone = res.data.phone;
        addressData[res.data.index].address = res.data.region;
        addressData[res.data.index].addressDetail = res.data.addressDetail;
        addressData[res.data.index].isdefault = res.data.isdefault;
        that.setData({
          addressData: addressData
        })
      }
    })
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