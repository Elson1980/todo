import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';
import { isLoading } from './reducers';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);
   
   const loadingMessage = <div>Loading todos ....</div>;

   const content = (
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
   return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(updateTodoRequest(id)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);