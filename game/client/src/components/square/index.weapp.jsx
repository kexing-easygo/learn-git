import React, { useState } from 'react'
import { Button } from '@tarojs/components'
import './index.less'


export default function Square(props) {
  const [state, setState] = useState(null);
  const {text} = props;

  
    return (
      <Button className="square" 
      onClick={
        () => { 
        if(state == null){
            setState(text);
           
        }
      }}>
        <text>{state}</text>
      </Button>
    );
}