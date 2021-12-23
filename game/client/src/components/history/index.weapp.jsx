import React, { useEffect } from 'react'
import { Block, Button, View,Text } from '@tarojs/components'
import './index.less'

/*
游戏回合记录
*/
export default function History(props) {
  const {history, getState} = props;

  // 根据回合添加序号和按钮
  const moves = history.map((move,step) => {
    const historyNumber = step;
    step++;
    const text = "Go to move #" + step;
    step++;

    return (
      <Block>
        <Text className="line">{step}.</Text>
        <Button className="buttons" onClick={()=>{getState(historyNumber)}}><Text className="text">{text}</Text></Button>
      </Block>
  )});

  return (
    <View>
      <Block>
        <Text className="firstLine" >1.</Text>
        <Button className="buttons" onClick={()=>{getState(-1)}}>
        <Text className="text">Go to game start</Text>
        </Button>
      </Block>
      {moves}
    </View>
  );
}

