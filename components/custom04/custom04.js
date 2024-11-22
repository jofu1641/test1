Component({

    data: {
        num: 10,
        obj: { name: 'Tom', age: 10 },
        arr: [1, 2, 3]
    },

    observers: {
        'obj.age': function (newAge) {
            console.log('obj.age updated:', newAge);
        },
        'obj.**': function (newObj) {
            console.log('obj updated:', newObj);
        },
        'arr.**': function (newArr) {
            console.log('arr updated:', newArr);
        }
    },

    methods: {
        // 更新 num
        update() { 
            this.setData({
                num: this.data.num + 1
            });
        },

        // 更新 obj 的内容
        updateObj() {
            this.setData({
                'obj.name': 'Jerry',   // 修改 name
                'obj.age': this.data.obj.age + 1 // 增加 age
            });
        },

        // 修改数组
        updateArray() {
            this.setData({
                arr: [...this.data.arr, this.data.arr.length + 1] // 添加新元素
            });
        }
    }
});