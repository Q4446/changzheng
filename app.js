
// app.js
import toAsync from "./utils/Asyac.js"
App({
  onLaunch() {
    // 展示本地存储能力
    wx.async = toAsync;
    // 登录
  
  },
  globalData: {
    userInfo: null
  }
})
