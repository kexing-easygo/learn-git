import React from 'react'
import { Button, View,Text } from '@tarojs/components'
import './index.less'

/*
历史回合button
*/
export default function History(props) {
  const {history, getState, winner} = props;

  // 根据回合添加序号和按钮
  const moves = history.map((move, step) => {
    if (step != 0 ) {
      const text = "Go to move #" + step;
      
      return (
        <View className='lines'>
          <Text className="line">{step+1}.</Text>
          <Button className="buttons" onClick={()=>{getState(step);winner(false)}}>
            <Text className="text">{text}</Text>
          </Button>
        </View>
  )}});


  return (
    <View>
      <View className='lines'>
        <Text className="firstLine" >1.</Text>
        <Button className="buttons" onClick={()=>{getState(0);winner(false)}}>
          <Text className="text">Go to game start</Text>
        </Button>
      </View>
      {moves}
    </View>
  );
}

