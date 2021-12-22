import React,{useState} from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Square from '../square'

let playing = true;
export default function Board(){
  const title = "Next Player: ";
  let player = playing? "X":"O";

    return (
      <View className="board-row">
        {title}{player}
        <View>
          <Square text={player}/>
          <Square text={player}/>
          <Square text={player}/>
        </View>
        <View>
          <Square text={player}/>
          <Square text={player}/>
          <Square text={player}/>
        </View>
        <View>
          <Square text={player}/>
          <Square text={player}/>
          <Square text={player}/>
        </View>
      </View>
    );
}