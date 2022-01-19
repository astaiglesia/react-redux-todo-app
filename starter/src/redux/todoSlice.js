import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 1, title: 'todo1', completed: false},
    {id: 2, title: 'todo2', completed: false},
    {id: 3, title: 'todo3', completed: true},
    {id: 4, title: 'todo4', completed: false},
    {id: 5, title: 'todo5', completed: false},
  ], 
  reducers: {
    // --- creates new todo items 
    // handles dispatches to the 'addTodo' action type
    // accepts the initial state and action object
    addTodo: (initialState, action) => {
      // logic to update state
        // create a new state object
      const newItem = {
        id: new Date(),               // setting the id to a new instance of date ensures its unique
        title: action.payload.title,
        completed: false,
      }
        
      // push new state object to update initialstate
      initialState.push(newItem);
    },
  },
});

export const { addTodo } = todoSlice.actions;  // action type

export default todoSlice.reducer;              // action reducer