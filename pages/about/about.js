// pages/about/about.js
Page({
    data: {
        message: "zengpei",
        students: [
            {name: 'kobe', age: 30},
            {name: 'james', age: 28},
            {name: 'curry', age: 32}
        ],
        counter: 0 
    },
    handleBtnClick() {
    // console.log('按钮发生了点击')
    //1.错误做法：界面不会刷新的
    //    this.data.counter += 1
    //    console.log(this.data.counter);
    //  2.this.setData
    this.setData({
        counter: this.data.counter + 1
    })
    },
    handleSubtraction() {
        this.setData({
            counter: this.data.counter - 1
        })
    }
 })