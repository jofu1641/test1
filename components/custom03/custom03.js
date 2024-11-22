// components/counter/counter.js
Component({
    properties: {
      // 接收父组件传递的初始值
      initial: {
        type: Number,
        value: 0
      }
    },
    data: {
      num: 0
    },
    observers: {
      // 监听 num 的变化
      num: function(newNum) {
        console.log('num变化为：', newNum);
        // 当 num 变化时，执行特定操作，例如更新页面标题
        wx.setNavigationBarTitle({
          title: `当前数字：${newNum}`
        });
      }
    },
    lifetimes: {
      attached() {
        // 组件初始化时，设置 num 为 initial 的值
        this.setData({
          num: this.data.initial
        });
      }
    },
    methods: {
      // 增加数字
      increase() {
        this.setData({
          num: this.data.num + 1
        });
      },
      // 减少数字
      decrease() {
        this.setData({
          num: this.data.num - 1
        });
      }
    }
  });