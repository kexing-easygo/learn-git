import React, { Component, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Board from '../board'

export default function Game() {
  const [state, setState] = useState(true);

      return (
        <View className="game">
          <View className="game-info" onclick={() => setState(!state)}>
          <Board className="game-board"  state={state} />
          </View>
        </View>
      );
  
  }