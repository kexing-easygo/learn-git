import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import Board from '../board'
import History from '../history'
import Title from '../title'

let history = []; // 游戏历史记录
history.push((new Array(9)).fill(null)); // 放入初始棋盘状态

/*
游戏系统 包括判断赢家/切换玩家/回调历史回合等
*/
export default function Game() {
  const [player, changePlayer] = useState("X"); // 玩家
  const [winState, win] = useState(false); // 是否有赢家
  const [board, setBoard] = useState(history[history.length -1]); // 目前棋盘状态
  const [editHistory, setEditHistory] = useState(-1); // 点击第几步的历史button

  // 记录历史回合 切换玩家
  const steps = (step) => {
    if (editHistory != -1) {
      history.splice(editHistory+1, history.length);
    } 
    history.push(step);
    setBoard(history[history.length -1]);
    player == "X" ? changePlayer("O") : changePlayer("X");
    setEditHistory(-1);
  }
  
  // 有无赢家
  const winner = (result) => { 
      win(result);
  }
  
  // 回调历史
  const getState = (step) => {
    setBoard(history[step]);
    setEditHistory(step);
    if (step % 2 == 0) {
      changePlayer('X');
    } else {
      changePlayer('O');
    }
  }


  return (
    <View>
      <Title checkWin={winState} player={player} />
      <Board player={player} steps={steps} winner={winner} gameState={winState} board={board.slice()} />
      <History history={history} getState={getState} winner={winner} />
    </View>
  )
}