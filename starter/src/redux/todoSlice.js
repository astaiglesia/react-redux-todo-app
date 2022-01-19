import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [], 
  reducers: {
    // --- creates new todo items 
    // handles dispatches to the 'addTodo' action type
    // accepts the initial state and action object
    addTodo: (initialState, action) => {
      // logic to update state
        // create a new state object
      const newItem = {
        id: new Date(),                 // setting the id to a new instance of date ensures its unique
        title: action.payload.title,
        completed: false,
      }
        
      // push new state object to update initialstate
      initialState.push(newItem);
    },

    // --- handles completed checkbox toggle
    // state: array of objects, iterate through to find the index of the item we want to update state
      // each item's state object has a uniq id and we want to find the object element whose id property matches the payload's id
    toggleComplete: (initialState, action) => {
      const index = initialState.findIndex(todo => todo.id === action.payload.id);
      initialState[index].completed = action.payload.completed;
    },

    // --- handles delete of item
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;  // action type

export default todoSlice.reducer;              // reducer object