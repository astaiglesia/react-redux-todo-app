# REACT + REDUX TODO APP

## THE STORE
### create and configure the store
- create a redux dir
- create store.js
  - import configureStore from redux toolkit
  - export the evaluated result of configureStore invoked with an argument of an object with a reducer property with a value of an empty object
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

### creating a slice
slice stores a piece, aka slice, of data and is bundled with all necessary data and functionality to change and retrieve the data
- in the redux folder create 