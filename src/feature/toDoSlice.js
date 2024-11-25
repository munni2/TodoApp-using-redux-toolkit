import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    AddToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
     state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
})


export const { AddToDo, updateTodo, deleteTodo, toggleTodo } = toDoSlice.actions

export default toDoSlice.reducer