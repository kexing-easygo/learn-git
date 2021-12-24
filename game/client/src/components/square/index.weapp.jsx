import React, { useState, useEffect } from 'react'
import { Button } from '@tarojs/components'
import './index.less'

/*
单一方块
*/
export default function Square(props) {
  const [state, setState] = useState(null);
  
  /*
  返回到指定回合的格子状态
  */
  function backHistory () {
    if (props.back) {
      setState(props.backText);
    } 
  }
    
  useEffect (() => {
    backHistory();
  })

  return (
    <Button className="square" 
      onClick={() => {
        if (state == null) {setState(props.text)};
        if (props.back) {props.clean(true)};
      }}>
      <text>{state}</text>
    </Button>
  );
}