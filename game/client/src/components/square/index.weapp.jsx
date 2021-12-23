import React, { useState } from 'react'
import { Button } from '@tarojs/components'
import './index.less'

export default function Square(props) {
  const [state, setState] = useState(null);

    return (
      <Button className="square" onClick={() => {
        if (state == null) {setState(props.text)}}}>
        <text>{state}</text>
      </Button>
    );
}