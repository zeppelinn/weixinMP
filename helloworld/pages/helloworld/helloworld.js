Page({

  /**
   * 页面的初始数据
   */
  data: {
    message1:"人人有功练",
    message2:"大师兄我🔥啦",
    data_name:"Text_demo",
    flag:true,
    items:[
      {name:"商品A"},
      {name:"商品B"},
      {name:"商品C"},
      {name:"商品D"},
      {name:"商品E"},
    ],
    condition:Math.floor(Math.random()*3 + 1), //生成1-3的随机数
    item:{
      name:"孙笑川",
      tel_numer:6324,
      address:"新津"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})