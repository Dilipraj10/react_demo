import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/slices/TodoSlice';

export default function Todo() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log("state: ",state);
    if(state.todo.isLoading){
        <h1>Loading</h1>
    }
  return (
    <div>
        <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
        {
            state.todo.data && state.todo.data.map(data => {
                return(
                    <li>{data.title}</li>
                )
            })
        }
    </div>
  )
}
