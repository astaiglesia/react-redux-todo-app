import { configureStore } from '@reduxjs/toolkit';
import addTodoReducer from './todoSlice';

export default configureStore({
  reducer: {
    addTodos: addTodoReducer,
  },
});