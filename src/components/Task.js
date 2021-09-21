import React from 'react'
import { ACTIONS } from './InputArea'

export const Task = (props) => {
    const {task, dispatch} = props
    return (
        <div>
            {task.id}
            <br />
            {task.content}
            <br />
            <input type='checkbox' readOnly={true} onClick={() => dispatch({type: ACTIONS.DONE_TASK, id: task.id})} checked={task.completed} />
        </div>
    )
}
