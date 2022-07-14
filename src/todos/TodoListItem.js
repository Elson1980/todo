import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <div className='todo-item-container'>
        <h3>{todo.text}</h3>
        <div className='buttons-container'>
        {todo.isCompleted
            ? null : 
            <button 
            className='completed'
            onClick={() => onCompletePressed(todo.text)}
            >
            Completed</button>}
        <button 
            className='remove'
            onClick={() => onRemovePressed(todo.id)}
            >
            Remove</button>
        </div>
    </div>
);

export default TodoListItem;