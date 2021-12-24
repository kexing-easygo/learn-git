import React,{ useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import './index.less'
import Square from '../square'
import History from '../history'

// 当前回合的棋盘状态 
const squares = [
  null,null,null,
  null,null,null,
  null,null,null,
]
// 记录棋盘历史状态
const history = []
// 检测是否按了历史的按钮
let back = false;
// 用于清除历史记录
let cleanHistoryState = -2;

/*
整个棋盘
*/
export default function Board(){
  const [player , changePlayer] = useState("X");
  const [title , changeTitle] = useState("Next Player: " + player);
  const [historyState, getHistoryState] = useState(-2);

  // 获得指定返回的棋盘状态编号
  const getHistory = (state)  => {
    getHistoryState(state);
  }
  
  // 回调历史回合状态
  const callBackState = () =>{
   if (historyState != -2) {
    back = true;
    if (historyState == -1) {
      changePlayer("X");
      for (let i = 0; i < squares.length; i++) {
        squares[i] = null;
      }
     } else {
      historyState % 2 == 0 ? 
      changePlayer("O"):changePlayer("X");
      for (let i = 0; i < squares.length; i++) {
        squares[i] = history[historyState][i];
      }
     }
     cleanHistoryState = historyState+2;
    }
  }

  // 获得是否真的悔棋
  const getClean = (clean) =>{
    cleanHistory(clean);
  }

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
      history.push(squares.slice());
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

  /*
  清除历史棋盘状态
  */
 function cleanHistory (cleanTrue) {
   if (cleanTrue) {
    console.log(1,history);
    if (cleanHistoryState == -1) {
      history.splice(0, history.length);
      console.log(2,history);
    } else if (cleanHistoryState > -1) {
      history.splice(cleanHistoryState, history.length);
      console.log(3,history);
    }
    cleanHistoryState = -2;
   }
   console.log(4,history);
 }

  // 更新游戏标题 检查赢家
  useEffect(() =>{
    if (checkWinner() == "No") {
      changeTitle("Next Player: " + player);
    }
    callBackState();
    getHistoryState(-2);
  })

    return (
      <View>
        <text className="board">{title}</text>
        <View className="board-row">
          <View>
            <Square text={() =>{return continueGame(0)}} 
            backText={squares[0]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(1)}} 
            backText={squares[1]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(2)}} 
            backText={squares[2]} back={back} clean={getClean}
             />
          </View>
          <View>
            <Square text={() =>{return continueGame(3)}}
            backText={squares[3]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(4)}}
            backText={squares[4]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(5)}}
            backText={squares[5]} back={back} clean={getClean}
             />
          </View>
          <View>
            <Square text={() =>{return continueGame(6)}}
            backText={squares[6]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(7)}}
            backText={squares[7]} back={back} clean={getClean}
             />
            <Square text={() =>{return continueGame(8)}}
            backText={squares[8]} back={back} clean={getClean}
             />
          </View>
        </View>
        <History history={history.slice()} getState={getHistory}/>
      </View>
    );
}