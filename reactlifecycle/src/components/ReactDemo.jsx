import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReactDemo() {
    const dispatch = useDispatch();
    const count = useSelector(state => state)
  return (
    <div>
        <button onClick={(e) => {dispatch({type:"INCREMENT"})}}>Increment</button>
        <h3>{count}</h3>
        <button onClick={(e) => {dispatch({type:"DECREMENT"})}}>Decrement</button>
    </div>
  )
}
