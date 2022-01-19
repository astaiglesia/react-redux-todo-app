# REACT + REDUX TODO APP
while implementation of redux should be planned alongside the UI, create the React UI scaffolding first
## THE STORE
### create and configure the store
- create a redux dir
- create store.js
  - `import configureStore` from redux toolkit
  - `export the evaluated result of configureStore` invoked with an argument of an object with a reducer property with a value of an empty object
  - configureStore() creates a store for holding our state and combining our reducers and includes built-in middleware
    - we will pass in our reducers into the object argument

``` 
  import { configureStore } from '@reduxjs/toolkit';

  export default configureStore({
    reducer: {},
  });
```

### connecting the store to the app
#### foreword
- App.js aggregates the components into a return value of a complete application react component
- index.js invokes ReactDom.render(), passing in the App componenent from ./App along with the element to append the component to (typically 'root'for standalone apps... in other cases such as microservices that are freestanding react apps might be appended elsewhere)
<br>

#### actions
- index.js >
  - import the store and provider
  - wrap the App component with the Provider
    - define the Provider's store attribute with the store to be used

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

```

<BR>
<hr>

## ADD TO-DO ITEMS
<hr>
<BR>

### create a slice
slice stores a piece, aka slice, of data and is bundled with all necessary data and functionality to change and retrieve the data
- in the redux folder create new file - todoSlice.js
  - `import createSlice` from the redux toolkit
  - `export the evaluated result` of createSlice()
    - pass in an object argument with the foloowing properties:
      * name: string
      * initial state: object
      * reducers: object of methods
**NOTE: when adding reducer property methods to the createSlice argument, under the hood Redux will create action types based on the reducer names**
  - createSlice() evaluated returns include an actions property object containing the action types
    * `export the action types`
  - `export default the reducer property` of the createSlice evaluated return

### add reducers to the store
- `import the reducer` to store.js
  - `add the reducer` object in the configureStore argument

### dispatch the action and payload to the Redux store
we want to dispatch the action whenever the target user event occurs
...in this case we want to dispatch the addTodo action onClick of the submit button

- dispatch the action within the associated component's event handler logic
  - in AddTodoForm.js > 
    - we have a functional component currently managing state with hooks
    - onSubmit handles synthetic events by logging the value to the console
    - returns a form with a text input and submit button
  - **we want to:**
    - `import useDispatch` hook from react-redux 
    - `import the action type`
    - add a `call to useDispatch,` passing in an action type and payload (data reflecting the state  changed)

### retrieving the data from Redux
now that we've dispatched an action type and payload to the Redux store, we our components that depend on that state to retrieve the updated state and re-render to reflect the changes
e.g. we want the TodoList component to render based on the application's state stored in Redux
- in the component file >
  - import the useSelector hook from react-redux library
    - useSelector accepts a function and returns the data based on that function
      - here useSelector will return an array of the todo's stored in state 
      - reminder **the state's name was defined in the store's reducer object -> { stateNameAsKey: reducerToUse}**
    - map the array in the returned component
  
<BR>
<hr>

## Mark a todo as complete
<hr>
<BR>

### Create the reducer & action
here we will be updating existing state (completed property as defined in the addToDo reducer)
- add reducer to createSlice argument
  - export the action type
- dispatch the action 
  - setup window event to trigger the action
  - in the action triggering component >
    - import useDispatch() and action type
      - assign a call to useDispatch
    - provide event handler logic that dispatches the action with payload



### Updating the item count component
// 
// import useSelector and create a function that calculates the total 
// retrieve the todos list
// filter out the completed items
// access the length property
