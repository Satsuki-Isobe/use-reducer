import React, { useState, useReducer } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Task } from './Task';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const ACTIONS = {
    CREATE_TASK: 'create_task',
    DONE_TASK: 'done_task',
    DELETE_TASK: 'delete_task'
}

export default function InputArea() {
    const classes = useStyles();

    const [content, setContent] = useState('test')

    const reducer = (tasks, action) => {
        console.log(action)
        switch(action.type) {
            case ACTIONS.CREATE_TASK:
                return [...tasks, newTask(action.content)]
            case ACTIONS.DONE_TASK:
                return tasks.map(task => {
                    if(task.id === action.id) {
                       return {...task, completed: !task.completed}
                    }
                    return task
                })
            default: 
            return tasks
        }
    }

    const newTask = (content) => {
        return {
            id: Date.now(),
            content: content,
            completed: false
        }
    }

    const [tasks, dispatch] = useReducer(reducer, [])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: ACTIONS.CREATE_TASK, content: content})
        setContent('')
    }
    console.log(tasks)

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Standard" value={content} onChange={e => setContent(e.target.value)}/>
            </form>
            {tasks.map((task, index) => {
                return <Task key={task.id} task={task} dispatch={dispatch} />
            })}
         </>
    )
}
