// counter.js
Component({
    data: {
        count: 0,
        timer: null,
        isRunning: false
    },

    lifetimes: {
        attached() {
            console.log('组件初始化完成')
        },

        detached() {
            // 组件销毁时清理定时器
            if (this.data.timer) {
                clearInterval(this.data.timer)
            }
        }
    },

    pageLifetimes: {
        show() {
            console.log('页面展示')
            // 恢复之前的计数状态
            const savedCount = wx.getStorageSync('counterValue')
            if (savedCount) {
                this.setData({ count: savedCount })
            }

            // 如果计数器之前在运行，则恢复运行
            if (this.data.isRunning) {
                this.startCounter()
            }
        },

        hide() {
            console.log('页面隐藏')
            // 保存当前计数值
            wx.setStorageSync('counterValue', this.data.count)
            // 暂停计数器
            if (this.data.timer) {
                clearInterval(this.data.timer)
                this.data.timer = null
            }
        }
    },

    methods: {
        startCounter() {
            if (this.data.timer) return

            this.setData({ isRunning: true })
            this.data.timer = setInterval(() => {
                this.setData({
                    count: this.data.count + 1
                })
            }, 1000)
        },

        stopCounter() {
            if (this.data.timer) {
                clearInterval(this.data.timer)
                this.data.timer = null
            }
            this.setData({ isRunning: false })
        },

        resetCounter() {
            this.stopCounter()
            this.setData({ count: 0 })
            wx.setStorageSync('counterValue', 0)
        }
    }
})