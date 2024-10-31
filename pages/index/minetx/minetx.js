Page({
  data: {
    latitude: 25.880167999999994,//维度
    longitude: 115.98119999999994,//经度
    markers: [],//地图的标记点
    polyline: [],//地图路线
    distance: '',//用户路程
    days: '',//用户天数
    //经纬度坐标
    xy: [
      [25.880167999999994, 115.98119999999994, '江西瑞金'],
      [25.605523999999996, 110.65659800000003, '四道封锁线'],
      [27.181123, 107.55940299999997, '猴场会议'],
      [27.37663099999999, 107.69637899999998, '强渡乌江'],
      [27.688423000000007, 106.92081099999996, '遵义会议'],
      [28.276145999999997, 105.998649, '四渡赤水'],
      [27.84560800000001, 105.04744400000004, '扎西会议'],
      [29.267714999999985, 102.28339600000004, '激战安顺场'],
      [27.4515, 103.0250, '巧渡金沙江'],
      [29.3158549, 102.953291, '强渡大渡河'],
      [29.59, 102.08, '飞夺泸定桥'],
      [30.811168, 102.736228, '过雪山'],
      [31.006716, 102.370225, '四川懋功'],
      [31.484615000000005, 102.49225200000001, '两河口会议'],
      [32.072416000000004, 103.22492499999998, '毛儿盖'],
      [33, 102, '过草地'],
      [32.51718488351201, 103.05293995060993, '沙窝会议'],
      [34.133250999999994, 103.92337500000008, '腊子口'],
      [36.933351, 108.18354, '吴起镇'],
      [35.698508, 105.059607, '会宁']
    ]
  },
  //地图绘制
  getLocation() {
    //遍历xy数组，获取经纬度和名字
    const points = this.data.xy.map((coords, index) => {
      const point = {
        latitude: coords[0],
        longitude: coords[1],
        name: coords[2]
      };
      return point;
    });
    //在地图上绘制图标与点
    const markers = points.map((point, index) => {
      let iconPath = '/utils/圆圈.png';
      if (index === 0) {
        iconPath = wx.getStorageSync('avatarUrl')
      }
      return {
        latitude: point.latitude,
        longitude: point.longitude,
        iconPath,
        width: 30,
        height: 30,
        label: {
          content: point.name,
          color: '#000',
          fontSize: 12
        }
      };
    });
    this.setData({
      polyline: [
        {
          points: points.map(p => ({ latitude: p.latitude, longitude: p.longitude })),
          color: "#FF0000",
          width: 5,
          dottedLine: false
        }
      ],
      markers
    });
  },
  onLoad() {
    this.getLocation()
  },
  // 显示路程按钮的点击事件处理函数
  showDistance() {
    this.setData({
      days: "20"
    })
  },
  // 开始路程按钮的点击事件处理函数
  startJourney() {
    this.setData({
      distance: "100"
    })
  }
});


// xy: [
//   [25.880167999999994, 115.98119999999994, '江西瑞金'],
//   [25.605523999999996, 110.65659800000003, '四道封锁线'],
//   [27.181123, 107.55940299999997, '猴场会议'],
//   [27.37663099999999, 107.69637899999998, '强渡乌江'],
//   [27.688423000000007, 106.92081099999996, '遵义会议'],
//   [28.276145999999997, 105.998649, '四渡赤水'],
//   [27.84560800000001, 105.04744400000004, '扎西会议'],
//   [29.267714999999985, 102.28339600000004, '激战安顺场'],
//   [27.4515, 103.0250, '巧渡金沙江'],
//   [29.3158549, 102.953291, '强渡大渡河'],
//   [29.59, 102.08, '飞夺泸定桥'],
//   [30.811168, 102.736228, '过雪山'],
//   [31.006716, 102.370225, '四川懋功'],
//   [31.484615000000005, 102.49225200000001, '两河口会议'],
//   [32.072416000000004, 103.22492499999998, '毛儿盖'],
//   [33.09280000000003, 109.55549999999994, '过草地'],
//   [32.51718488351201, 103.05293995060993, '沙窝会议'],
//   [34.133250999999994, 103.92337500000008, '腊子口'],
//   [36.933351, 108.18354, '吴起镇'],
//   [35.698508, 105.059607, '会宁']
// ]

// Page({
//   data: {
//     locationInfo: '',
//     latitude: 0,
//     longitude: 0,
//     markers: [],
//     polyline: []
//   },
//   getLocation() {
 
