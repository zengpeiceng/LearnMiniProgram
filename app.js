// 注册一个小程序
App({
    // 生命周期函数：后台存活2个小时
    // 小程序初始化完成时会执行的生命周期函数
    onLaunch: function() {
        console.log('小程序初始化完成： onLanuch');
        // 异步调用 获取用户信息
        // wx.getUserInfo({
        //     // 数据拿到之后，再进行回调的
        //    success: function(res) {
        //        console.log(res);
        //    }
        // }),


        // setTimeout(function() {
        //   const  err = new err 
        //     throw err
        // },3000)
    },
    // 小程序界面显示出来之后会执行的生命周期函数
    onShow: function(options) {
        console.log('界面加载出来：onShow');
    // 1.判断小程序的进入场景
        console.log(options);
        switch(options.scene){
            case 1001: break;
            case 1005: break;
        }
    },
    // 小程序界面
    onHide: function() {
        console.log('界面被隐藏时会执行：onHide');
    },
    onError: function(msg) {
        console.log('小程序中发生错误时执行：onError');
    },
    globalData: {
        name: 'zengpei',
        age: 18
    }
})