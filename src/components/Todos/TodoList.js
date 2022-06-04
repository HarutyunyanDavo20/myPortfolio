import React from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoRow from './TodoRow';
import './Todos.scss'

const TodoList = () => {
    return (
        <div className='todos'>
        <TodoForm />
        <TodoRow />
        <TodoFooter />
        
        </div>
    );
}

export default TodoList;
