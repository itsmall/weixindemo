// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names: ["张三", "李四", "王五", "赵六"],
    msg: "hello",
    person: {
      id: 0,
      name: "sunyanhui",
      age: 20,
      height: 175
    },
    isChecked: true,
    persons: [{
      id: 0,
      name: "张三",
      age: 15,
      tabel: [1, 2, 3]
    }, {
      id: 1,
      name: "李四",
      age: 20,
    }, {
      id: 2,
      name: "王五",
      age: 65,
      tabel: [1, 2, 3]
    }, {
      id: 3,
      name: "赵六",
      age: 8,
      tabel: [1, 2, 3]
    }]
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
