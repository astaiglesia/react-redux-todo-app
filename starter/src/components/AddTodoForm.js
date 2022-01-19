import React, { useState } from 'react';
// import useDispatch hook 
import { useDispatch } from 'react-redux';
// import the action 
import { addTodosASync } from '../redux/todoSlice';


const AddTodoForm = () => {
	// useState hook allows us to track state in a function component
	// useState accepts an initial state and returns two values:
		// The current state
		// A function that updates the state
	const [value, setValue] = useState('');
	// assign a reference to the dispatch function -> use to dispatch actions as needed 
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		// provide onclick functionality to the form submit button 
			// call to dispatch passing in the new value to dispatch as the action payload
			// reminder - actions accept an object that gets mapped to action.payload
		if (value) {
			dispatch(addTodosASync({
				title: value,
			}))
		}
	};
	

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
