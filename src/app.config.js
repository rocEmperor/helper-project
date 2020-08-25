export default {
  pages: [
    'pages/home/index',
    'pages/mine/index'
  ],
  tabBar: {
    color: "#727272",
    selectedColor: "#31b16c",
    backgroundColor: "#fafafa",
    borderStyle: "white",
    list: [
      {
        iconPath: 'static/images/tabBar/tabbar_home.png',
        selectedIconPath: 'static/images/tabBar/tabbar_home_active.png',
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        iconPath: 'static/images/tabBar/tabbar_mine.png',
        selectedIconPath: 'static/images/tabBar/tabbar_mine_active.png',
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
