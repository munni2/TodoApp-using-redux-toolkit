import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from "../feature/toDoSlice";

function ListTodo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleUpdate = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleSave = () => {
        dispatch(updateTodo({ id: editId, text: editText }));
        setEditId(null);
        setEditText('');
    };

    return (
        <ul className="space-y-4">
            {todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-xl shadow-md">
                    {editId === todo.id ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="text-gray-700 font-medium truncate border rounded px-2"
                        />
                    ) : (
                        <span className={`text-gray-700 font-medium truncate ${
                            todo.completed ? 'line-through' : ''
                          }`}>{todo.text}</span>
                    )}

                    <div className="flex items-center space-x-3">
                        <button
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        className="text-blue-500 hover:text-blue-600 font-medium transition"
                        >
                            {todo.completed ? 'Unmark' : 'Complete'}
                        </button>

                        {editId === todo.id ? (
                            <button
                                onClick={handleSave}
                                className="text-green-500 hover:text-green-600 font-medium transition"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleUpdate(todo.id, todo.text)}
                                className="text-yellow-500 hover:text-yellow-600 font-medium transition"
                            >
                                Update
                            </button>
                        )}

                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="text-red-500 hover:text-red-600 font-medium transition"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ListTodo;
