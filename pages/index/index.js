Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    function format(time) {
      let date = new Date(time * 1000);
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      return M + D + h + m + s;
    }
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'get',
      success: function(res) {
        res.data.forEach(item => {
          item.last_touched = format(item.last_touched)
        })
        that.setData({
          list: res.data
        })
        setTimeout(() => {
          that.setData({ hidden: true });
        }, 300)
      }
    })
    console.log(that.list)
  },

  onTouch: function(event) {
    wx.navigateTo({
      url: '/pages/post/post?id=' + event.currentTarget.id,
    })  
    console.log(event.currentTarget.id)
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