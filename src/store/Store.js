import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/toDoSlice';

export const store = configureStore({
  reducer: todoReducer
})