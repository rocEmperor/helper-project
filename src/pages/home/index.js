import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from '@tarojs/components'

import './index.scss'

@connect(({ homeReducer }) => ({
  ...homeReducer
}))
class Home extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidMount () {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo, 2222)
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.userInfo',
            success () {
              wx.getUserInfo({
                success: function(res) {
                  console.log(res.userInfo, 11111)
                }
              })
            }
          })
        }
      }
    })
  }

  componentDidHide () { }

  getInfo (val) {
    console.log(val.detail.userInfo, 100000)
  }

  render () {
    let data = [ 1, 2, 3, 4 ]
    return (
      <View className='home'>
        {/* <Button type="primary" openType="getUserInfo" onGetuserinfo={(val) => this.getInfo(val)}>授权</Button>  */}
        <View className="box">
          {data.map((item, index) => {
            return (
              <View className={`item item-${index}`} key={item}></View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default Home

