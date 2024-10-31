const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page({
  data: {
    username: '',
       // 初始头像地址，使用默认头像
       avatarUrl: defaultAvatarUrl
  },
  // 接受输入框的头像
  handleAvatarUrlInput(e) {
    this.setData({
      // 读取输入框的头像
      avatarUrl: e.detail.value
    });
  },
  onChooseAvatar(e) {
    // 从事件对象的 detail 中获取用户选择的头像地址
    const { avatarUrl } = e.detail;
    // 通过 setData 更新页面数据中的头像地址
    this.setData({
      avatarUrl,
    });
  }
,
  login() {
    const { avatarUrl } = this.data;
    if (avatarUrl === defaultAvatarUrl) {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none'
      });
    } else {
     //登录方法
      wx.login({
        success: (res) => {
          // console.log(res);
          wx.request({
             url: "http://localhost/api/login",
             method: "POST",
             data:{
               code: res.code//微信登录凭证
             },
             success: result => {
               console.log(result)
             } 
          })
        },
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      wx.switchTab({
        url: '/pages/index/home/home',
      });
      wx.setStorageSync('avatarUrl', avatarUrl)
    }
  },
  // 跳转到注册页面
  goToRegister() {
    wx.navigateTo({
      url: '/pages/index/reg/reg',
    });
  },
  onLoad(options){
 

  }

});
// secret:"56a4512ef6bf9563aff730ce424673a"