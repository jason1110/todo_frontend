import React from 'react'
import TodoItem from './TodoItem'

export default function TodoContainer({todos, deleteTodo}) {
    
    const showTodos = () => {
        return todos.map(todo => <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} /> )
    }
    
    return (
        <div>
            <ul className='todo-list'>
                {showTodos()}
            </ul>
        </div>
    )
}
