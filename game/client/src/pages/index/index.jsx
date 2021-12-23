import React from 'react'
import { View } from '@tarojs/components'
import './index.less'
import Board from '../../components/board'

export default function Index() {
  return (
      <View className='index'>
        <Board />
      </View>
    )
}
