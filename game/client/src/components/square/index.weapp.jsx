import React, { useState } from 'react'
import { Button } from '@tarojs/components'
import './index.less'

/*
单一方块
*/
export default function Square(props) {
  const [state, setState] = useState(null);
  
 
    console.log("a",props.back);
  

  return (
    <Button className="square" 
      onClick={() => {if (state == null) {setState(props.text)}}}>
      <text>{state}</text>
    </Button>
  );
}