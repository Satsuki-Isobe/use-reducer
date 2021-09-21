import React, { useReducer, useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputArea from './components/InputArea';


export default function App2() {
    const ACTIONS = {
        TOGGLE_INPUT: 'toggle_input',
    }

    const [isOpen, setIsOpen] = useState(true)


    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.TOGGLE_INPUT:
                return setIsOpen(!isOpen)
            default:
        }
    }

    const [state, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <AddCircleOutlineIcon onClick={() => dispatch({type: ACTIONS.TOGGLE_INPUT})} />
            {isOpen ? <InputArea /> : ''}
        </div>
      )
}
