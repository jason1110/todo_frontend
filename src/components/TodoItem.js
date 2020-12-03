import React from 'react'

export default function TodoItem({title, content, deleteTodo, id}) {
    
    const handleClick = (event) => deleteTodo(id)
    
    return (
        <div>
            <li className='todo-item'>
                <h2>{title}</h2>
                <h3>{content}</h3>
                <button onClick={handleClick} className='delete-button'>DELETE</button>
            </li>
        </div>
    )
}
