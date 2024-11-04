const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
import toAsync from "../../../utils/Asyac"
Page({
  data: {
    // 初始头像地址，使用默认头像
    avatarUrl: wx.getStorageSync("ava"),
    username: "hh"

  },
  onLoad(options){
    let that=this
    var userName
    (async function getToken(){
      const getopenid = toAsync(wx.getStorage)
      let r = await getopenid({
        key: "openid"
      })
      const login = toAsync(wx.request)
      let res = await login({
        url: "http://localhost:8081/login/"+r.data,
        method: "GET"
      })
      console.log(res);
    })()
    
      
  },
  
  onChooseAvatar(e) {
    // 从事件对象的 detail 中获取用户选择的头像地址
    const { avatarUrl } = e.detail;
    wx.setStorageSync('ava', avatarUrl)
    // 通过 setData 更新页面数据中的头像地址
    this.setData({
      avatarUrl,
    });
  }
});