Page({
    data: {
        isChecked: false
    },

    onLoad() {
        console.log('2. 父组件加载')
    },

    getData(event) {
        console.log('6. 父组件接收到子组件事件')
        console.log('7. 接收的数据:', event.detail)

        this.setData({
            isChecked: event.detail
        })
    },

    getChild() {
        console.log('3. 开始获取子组件实例')

        // 通过selectComponent获取子组件实例
        const child = this.selectComponent('#child')
        console.log('8. 获取到的子组件实例:', child)

        // 访问子组件的数据
        console.log('9. 子组件的checked状态:', child.data.isChecked)

        // 调用子组件的方法
        console.log('10. 准备调用子组件方法')
        child.toggleCheckbox()
    }
})