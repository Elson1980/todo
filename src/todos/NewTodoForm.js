import React, {useState} from 'react';

const NewTodoForm = () => {

    const [inputValue, setInputValue] = useState('')

    return (
    <div className='new-todo-form'>
        <input 
        className='new-todo-input' 
        type='text'
        placeholder='Type New Todo'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
        <button className='new-todo-button'>Create Todo</button>
    </div>
    )
};

export default NewTodoForm;