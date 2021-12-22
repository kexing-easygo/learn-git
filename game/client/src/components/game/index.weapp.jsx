import React, { Component, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Board from '../board'

export default function Game() {
  
      return (
        <View className="game">
          
          <View className="game-board">
            <Board />
          </View>
          <View className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </View>
        </View>
      );
  
  }