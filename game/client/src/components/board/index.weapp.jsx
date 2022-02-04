import React, { useEffect, useState } from 'react'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

/*
棋盘
*/
export default function Board(props){
  const { player, steps, winner, gameState, board } = props;

  // 获胜条件
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

  // 处理 点击操作
  const handleClick = (content, number) => {
    if (board[number] == null && !gameState) { 
      let currentBoard = board;
      currentBoard[number] = content;
      steps(currentBoard);
    } 
  }

  // 判断是否产生赢家
  const checkWin = () => {
    for (let i=0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (board[a] == board[c] && board[a] == board[b] && board[a] == board[c]
        && board[a] != null) {
          return true;
      } 
    }
    return false;
  }
  
  useEffect(() =>{
    if (checkWin()) {
      winner(true);
    }
  })

   
    return (
        <View className='board'>
        {board.map((squaresState, location) => {
          return (
            <Button className="square" onClick={() => handleClick(player, location)}>
            <Text className="text">{squaresState}</Text>
            </Button>
        )})}
        </View>
    );
}