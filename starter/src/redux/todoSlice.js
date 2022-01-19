// import Thunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create an api fetch request for use in a state change
export const getTodosASync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const res = await fetch('http://localhost:7000/todos');

    if (res.ok) {
      const todos = await res.json();
      return { todos };
    }
  }
)
; 
export const addTodosASync = createAsyncThunk(
  'todos/addTodosAsync',
  async (payload) => {
    const res = await fetch('http://localhost:7000/todos', {
      method: 'POST' ,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (res.ok) {
      const todo = await res.json();
      return { todo };
    }
  }
); 

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
    deleteItem: (initialState, action) => {
      // find the index of the clicked item
      // pop the item fom the initial state array
      // remember to pass the id in the payload of the handler function
      // const index = initialState.findIndex(todo => todo.id === action.payload.id);
      // initialState.splice(index, 1)
      // -- filter is a cleaner implementation
      return initialState.filter(todo => todo.id !== action.payload.id);
    },
  },
  // add a extraReducers object to work with Thunk
  extraReducers: {
    // creating a fulfilled method as a property on the function object that runs on fulfillment of the API call
    // the Thunk API call appends the payload with the returned value and passes that to the reducer
    [getTodosASync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodosASync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
  },

});

export const { addTodo, toggleComplete, deleteItem } = todoSlice.actions;  // action type

export default todoSlice.reducer;              // reducer object