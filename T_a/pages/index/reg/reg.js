const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page({
  data: {
    studentId: '',//用户学号
    academy: '',//用户学院
    class_t: '',//用户班级
    uname: '',//用户真实姓名
    // 初始头像地址，使用默认头像
    avatarUrl: defaultAvatarUrl,//用户头像
    nickname: ''//用户昵称
  },
  onStudentIdInput(e) {
    this.setData({
      studentId: e.detail.value,
    });
  },
  onAcademyInput(e) {
    this.setData({
      academy: e.detail.value,
    });
  },
  onClassInput(e) {
    this.setData({
      class_t: e.detail.value,
    });
  },
  onUnameInput(e) {
    this.setData({
      uname: e.detail.value,
    });
  },
  onChooseAvatar(e) {
    // 从事件对象的 detail 中获取用户选择的头像地址
    const { avatarUrl } = e.detail;
    // 通过 setData 更新页面数据中的头像地址
    this.setData({
      avatarUrl,
    });
  },
   // 接受输入框的头像
   handleAvatarUrlInput(e) {
    this.setData({
      // 读取输入框的头像
      avatarUrl: e.detail.value
    });
  },
  onNickNameInput(e) {
    this.setData({
      nickname: e.detail.value,
    });
  },
  //注册方法
  register() {
    const { studentId, college, class_t, uname,avatarUrl, nickname} = this.data;
    if (!studentId ||!college ||!class_t ||!uname ||!avatarUrl ||!nickname) {
      wx.showToast({
        title: '请填入完整信息',
        icon: 'none',
      });
      return;
    }
    wx.request({
      url: 'http://localhsot/api/register',
      method: "POST",
      data:{
         openid: "",
         nickname: nickname,
         avatarUrl: avatarUrl,
         studentId: studentId,
         academy: academy,
         class_t: class_t,
         uname: uname
      },
      success: result=> {
         console.log(result)  
      }
    })


    // 这里可以添加注册逻辑，比如调用接口提交数据
    wx.showToast({
      title: '注册成功',
      icon: 'success',
    });
  },
  goToLogin() {
    wx.navigateBack();
  },
});