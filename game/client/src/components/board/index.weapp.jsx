import React,{useState} from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Square from '../square'


export default function Board(props){

  const title = "Next Player: ";
  const {state} = props;
  const player = state? "X":"O";

    return (
      
      <View>
        <text className="board">{title}{player}</text>
        <View className="board-row">
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
        
      </View>
      
    );
}