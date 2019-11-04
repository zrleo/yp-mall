//Page Object
import { request } from "../../request/index.js"
Page({
  data: {
    swiperList: [],
    catesList: [],
    floorList: []
  },
  //options(Object)
  onLoad: function (options) {
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  getSwiperList() {
    request({ url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata' }).then(res => {
        this.setData({
          swiperList: res.data.message
        })
      })
  },
  getCateList() {
    request({ url: 'https://api.zbztb.cn/api/public/v1/home/catitems' }).then(res => {
        this.setData({
          catesList: res.data.message
        })
      })
  },
  getFloorList() {
    request({ url: 'https://api.zbztb.cn/api/public/v1/home/floordata' }).then(res => {
        this.setData({
          floorList: res.data.message
        })
      })
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  