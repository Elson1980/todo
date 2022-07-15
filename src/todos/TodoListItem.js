import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const TodoItemButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const TodoItemButton = styled.div`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`;

const TodoItemCompleted = styled.div`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #22ee22;
`;

const TodoItemRemove = styled.div`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;   
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <TodoItemButtonContainer>        
        {todo.isCompleted
            ? null : 
            <TodoItemCompleted
            className='completed'
            onClick={() => onCompletePressed(todo.id)}
            >
            Completed</TodoItemCompleted>}
        <TodoItemRemove 
            className='remove'
            onClick={() => onRemovePressed(todo.id)}
            >
            Remove</TodoItemRemove>
        </TodoItemButtonContainer>
    </TodoItemContainer>
);

export default TodoListItem;