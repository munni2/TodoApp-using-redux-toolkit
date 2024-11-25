import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddToDo } from '../feature/toDoSlice';

function AddTodo() {
    const [input, setInput] = useState();
    const dispatch =useDispatch();

    const addTodoHandler = (e) => {
       e.preventDefault();
        dispatch(AddToDo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="flex items-center mb-6 space-x-3">
            <input 
            type="text" 
            className="flex-grow p-3 rounded-xl border border-gray-300 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            placeholder="Add a new task" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button 
            className="bg-blue-500 text-white font-medium px-5 py-3 rounded-xl shadow hover:bg-blue-600 transition">
            Add
            </button>
        </form>
    )
}

export default AddTodo