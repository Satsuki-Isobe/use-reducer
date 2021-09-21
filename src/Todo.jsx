import React from 'react'
import { ACTIONS } from './App'

export const Todo = ({todo, dispatch}) => {
    return (
        <div>
            {todo.name}
            <input type='checkbox' readOnly={true} checked={todo.complete} onClick={() => dispatch({type: ACTIONS.COMPLETE_TODOS, payload: { id: todo.id}})}/>
            <button >complete</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODOS, payload: { id: todo.id}})}>delete</button>
        </div>
    )
}
