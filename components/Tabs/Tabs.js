// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // titles: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemTap(e) {
      //解构 对 复杂类型进行结构的时候 复制了一份变量的引用而已
      // const {index} = e.currentTarget.dataset;
      const index = e.currentTarget.dataset.index;
      //子传父通信 this.triggerEvent("父组件的事件名称", 参数);
      this.triggerEvent("itemChange", index);
    }
  }
})
