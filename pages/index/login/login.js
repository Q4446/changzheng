// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
import toAsync from "../../../utils/Asyac"
Page({
  data: {
    username: '',
    showPrivacy: false,
       // 初始头像地址，使用默认头像
    // avatarUrl: defaultAvatarUrl
  },
  // 接受输入框的头像
  handleAvatarUrlInput(e) {
    this.setData({
      // 读取输入框的头像
      avatarUrl: e.detail.value,
    });
  },
  onChooseAvatar(e) {
    // 从事件对象的 detail 中获取用户选择的头像地址
    const { avatarUrl } = e.detail;
    wx.setStorageSync('ava', avatarUrl)
   

    // 通过 setData 更新页面数据中的头像地址
    this.setData({
      avatarUrl,
    });
  },
  // 跳转到注册页面
  goToRegister() {
    wx.navigateTo({
      url: '/pages/index/reg/reg',
    });
  },
  onLoad(options){
    (async function login(){
      const asyncLogin = toAsync(wx.login); 
      let res = await asyncLogin();
      // console.log(res);
      const asyncRequestSecret = toAsync(wx.request)
      let r = await asyncRequestSecret({
        url: "http://1.95.6.188:10000/api/user/getSecret",
        method: "GET"
      })
      let url = "https://api.weixin.qq.com/sns/jscode2session?"
      let Secret = r.data
      let u = url+Secret+"&js_code="+res.code+"&grant_type=authorization_code"
      // console.log(u);
      let response =await asyncRequestSecret({
        url: u,
        method: "GET"
      })
      if(response.statusCode == 200){
          const cookie = toAsync(wx.setStorage)
          let res = await cookie({
            key: "openid",
            data: response.data.openid
          })
          if("setStorage:ok" == res.errMsg){
              wx.switchTab({
                url: '/pages/index/home/home',
              })
          }
          
      }
    })()
    wx.getPrivacySetting({
      success: res => {
        // console.log(res) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
        if (res.needAuthorization) {
          // 需要弹出隐私协议
          this.setData({
            showPrivacy: true
          })
        } else {
          // 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用隐私接口
        }
      },
      fail: () => {},
      complete: () => {}
    })
    
  },
  getUserProfile(){
    this.setData({
      // 读取输入框的头像
      showPrivacy: true,
    });
  },
  handleAgreePrivacyAuthorization() {

  }

});
