const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  data: {
    // 初始头像地址，使用默认头像
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e) {
    // 从事件对象的 detail 中获取用户选择的头像地址
    const { avatarUrl } = e.detail;
    // 通过 setData 更新页面数据中的头像地址
    this.setData({
      avatarUrl,
    });
  }
});