// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [{
      id: 0,
      name: "首页",
      isActive: true
    }, {
      id: 1,
      name: "原创",
      isActive: false
    }, {
      id: 2,
      name: "分类",
      isActive: false
    }, {
      id: 3,
      name: "关于",
      isActive: false
    }]
  },
  //接受数据
  handleItemChange(e) {
    const index = e.detail;

    let {titles} = this.data;
    // titles.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    titles.forEach((v, i) => {
      v.isActive = i === index ? true : false
    });

    this.setData({
      titles
    })
  }
})
