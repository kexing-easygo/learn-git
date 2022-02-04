import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

/*
游戏标题
*/
export default function Title(props) {
  const {player, checkWin} = props;
  const subTitle = "Next Player: "
  const [title , changeTitle] = useState(subTitle + player);

  // 切换标题
  const updateTitle = () =>{
    if (checkWin) {
      let winner = player == 'X'? 'O':'X';
      changeTitle("Winner: " + winner);
    } else {
      changeTitle(subTitle + player);
    }
  }

  useEffect(() =>{
    updateTitle();
  })

  return (
    <View className="titleView">
      <Text className="title">{title}</Text>
    </View>
  )
}
