import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import './index.scss'

@connect(({ homeReducer }) => ({
  ...homeReducer
}))
class Mine extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        我的
      </View>
    )
  }
}

export default Mine

