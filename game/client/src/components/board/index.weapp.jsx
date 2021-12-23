import React,{ useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import './index.less'
import Square from '../square'

// 棋盘状态
let squares = [
  null,null,null,
  null,null,null,
  null,null,null,
]

export default function Board(){
  const [player , changePlayer] = useState("X");
  const [title , changeTitle] = useState("Next Player: " + player);
  
  /*
  查看是否产生赢家
  */
  function checkWinner() {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCondition.length; i++) {
      if (squares[winCondition[i][0]] == squares[winCondition[i][1]] 
        && squares[winCondition[i][1]] == squares[winCondition[i][2]]
        && squares[winCondition[i][0]] == squares[winCondition[i][2]]
        && squares[winCondition[i][0]] != null) {
        changeTitle("Winner: " + squares[winCondition[i][0]]);
        return squares[winCondition[i][0]];
      }
    }
    return "No";
  }

  /*
  转换玩家 
  */
  function turnPlayer(position){
    if(squares[position] == null) {
      changePlayer(player=="X"?"O":"X");
      squares[position] = player;
      return player;
    }
  }

  /*
  如果游戏继续 棋盘继续变化
  如果游戏终止 棋盘状态不变
  */
  function continueGame(position) {
    if (checkWinner() == "No") {
      return turnPlayer(position);
    }
    return;
  }

  // 更新游戏标题
  useEffect(() =>{checkWinner();})

    return (
      <View>
        <text className="board">{title}</text>
        <View className="board-row">
          <View>
            <Square text={() =>{return continueGame(0)}}/>
            <Square text={() =>{return continueGame(1)}}/>
            <Square text={() =>{return continueGame(2)}}/>
          </View>
          <View>
            <Square text={() =>{return continueGame(3)}}/>
            <Square text={() =>{return continueGame(4)}}/>
            <Square text={() =>{return continueGame(5)}}/>
          </View>
          <View>
            <Square text={() =>{return continueGame(6)}}/>
            <Square text={() =>{return continueGame(7)}}/>
            <Square text={() =>{return continueGame(8)}}/>
          </View>
        </View>
      </View>
    );
}