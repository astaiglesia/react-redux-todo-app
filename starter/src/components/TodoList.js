import React from 'react';
import TodoItem from './TodoItem';
// import useSelector hook to retrieve state from Redux store
import { useSelector } from 'react-redux';

const TodoList = () => {
	// define the array of objects to be mapped by accessing the component's state from the Redux store
	const todos = useSelector(state => state.todos);

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
