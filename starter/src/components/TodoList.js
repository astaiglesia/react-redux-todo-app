import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
// import useSelector hook to retrieve state from Redux store
import { useSelector, useDispatch } from 'react-redux';
import { getTodosASync } from '../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	// define the array of objects to be mapped by accessing the component's state from the Redux store
	const todos = useSelector(state => state.todos);

	// triggers the action that fetches the API todo list
	// use Effect lets you perform side effects as soon as the component loads
		// here we want the side effect of loading the component is to fetch the todos from an API
	useEffect(() => {
		dispatch(getTodosASync());
	}, [dispatch]) // add dispatch to the dependencies array


	// map the state to the component
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
