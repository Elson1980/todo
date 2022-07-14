import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { displayAlert } from './thunks';
import { completeTodo, removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, onDisplayAlertClicked }) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map(todo => 
        <TodoListItem 
        todo={todo} 
        onRemovePressed={onRemovePressed} 
        onCompletePressed={onCompletePressed} 
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);