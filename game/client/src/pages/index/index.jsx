import React, { useEffect, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Game from '../../components/game'

export default function Index() {
  return (
      <View className='index'>
        <Game />
      </View>
    )
  
}
