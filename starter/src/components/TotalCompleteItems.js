import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const todosCompleted = useSelector( state => {
		return state.todos.filter(todo => todo.completed === true)
	})

	console.log(todosCompleted)
	return <h4 className='mt-3'>Total Complete Items: {todosCompleted.length}</h4>;
};

export default TotalCompleteItems;
