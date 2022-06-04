import React from 'react';
import { useSelector } from 'react-redux';

const TodoFooter = () => {

    const {todos, completed} = useSelector(state => state.todos)

    return (
        <div>
            {completed}/{todos.length} completed
        </div>
    );
}

export default TodoFooter;
