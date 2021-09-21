import React, {useReducer, useState} from 'react'
import './App.css';
import { Todo } from './Todo';


export const ACTIONS = {
  ADD_TODOS: 'add_todos',
  COMPLETE_TODOS: 'complete_todos',
  DELETE_TODOS: 'delete.todos'
}

function App() {


  const reducer = (todos, action) => {
    switch(action.type){
      case ACTIONS.ADD_TODOS:
        return [...todos, newTodo(action.payload.name)]
      case ACTIONS.COMPLETE_TODOS:
        return todos.map((todo) => {
          if(todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete}
          }
          return todo
        })
      case ACTIONS.DELETE_TODOS:
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos
    }
  }

  const newTodo = (name) => { 
    return {
      id: Date.now(),
      name: name,
      complete: false
    }

  }

  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSbmit = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODOS, payload: {name: name}})
    setName('')
  }
  return (
    <>
    <form onSubmit={handleSbmit}>
      <input type='text' onChange={e => setName(e.target.value)} value={name}/>
    </form>
    {todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}

    </>
  );
}

export default App;
