// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
    // -----------1.初始化数据------------------
    data: {
        message: '哈哈哈'
    },

    // ------------2.监听页面的生命周期函数--------------------
    // 页面被加载出来 
    onLoad() {
        // console.log('onload');
        wx.request({
          url: 'http://123.207.32.32:8000/recommend',
          success: (res) => {
              console.log(res);
          }
        })
   },
    // 页面显示出来时
    onShow() {
        // console.log('onShow');
    },
     // 页面初次渲染完成时
     onReady() {
        // console.log('onReady');
    },
    // 当页面隐藏起来时
    onHide() {
        // console.log('onHide');
    },
    onUnload() {
        // console.log('onUpload');
    }
    ,
    // -----------3.监听wxml中相关的一些事件
    handleGetUserInfo: function(event) {
        console.log(event)
    },
    // 其他事件
    onPageScroll(obj) {
        console.log(obj);
    },
    onReachBottom(){
        console.log('页面滚动到底部');
    },
    onPullDownRefresh() {
        console.log('下拉刷新的事件');
    }
})