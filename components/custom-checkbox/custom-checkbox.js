Component({
    properties: {
        label: String,
        position: String,
        checked: {
            type: Boolean,
            value: false
        }
    },

    data: {
        isChecked: false
    },

    lifetimes: {
        attached() {
            console.log('1. 子组件初始化')
            this.setData({
                isChecked: this.properties.checked
            })
        }
    },

    methods: {
        toggleCheckbox() {
            console.log('4. 子组件方法被调用')
            const newState = !this.data.isChecked
            this.setData({
                isChecked: newState
            })
            console.log('5. 子组件状态已更新:', newState)

            this.triggerEvent('changechecked', newState)
        }
    }
})