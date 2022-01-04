import React, { useState } from 'react'
import "./Task.css"
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../Redux/Reducers/todoSlice'

const Task = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodo = () => {
        console.log(`Adding ${input}`)

        dispatch(saveTodo[{
            item: input,
            done: false,
            id: Date.now()
        }])
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Task
