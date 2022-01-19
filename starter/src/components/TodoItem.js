import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';
import { deleteItem } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(
			toggleComplete({ id, completed: !completed }) 	
			// because this is toggle logic, triggering can simply dispatch a payload with the opposite state
		);
	};

	const handleDelete = () => {
		dispatch(deleteItem({ id }));
	}
	
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mr-3'
						onChange={handleCheckboxClick} 
						checked={completed}
					></input>
					{title}
				</span>
				<button 
					className='btn btn-danger'
					onClick={handleDelete}
				>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
