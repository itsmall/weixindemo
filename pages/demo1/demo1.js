// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: "",
    fruit: [{
      id: 0,
      name: "葡萄",
      value: "grapes"
    }, {
      id: 1,
      name: "苹果",
      value: "apple"
    }, {
      id: 2,
      name: "橘子",
      value: "orange"
    }, {
      id: 3,
      name: "香蕉",
      value: "banana"
    }, {
      id: 4,
      name: "西瓜",
      value: 'watermelon'
    }],
    checkList: []
  },
  getPhoneNumber(e) {
    console.log(e);
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  },
  getUserInfo(e) {
    console.log(e);
  },
  launchAppError(e) {
    console.log(e);
  },
  radioClick(e) {
    let gender = e.detail.value;
    this.setData({
      gender: gender
    })
  },
  checkClick(e) {
    const fruits = e.detail.value;
    this.setData({
      checkList: fruits
    })

  }
})
