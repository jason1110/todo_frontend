import React from 'react'

export default function TodoItem({title, content}) {
    return (
        <div>
            <li className='todo-item'>
                <h2>{title}</h2>
                <h3>{content}</h3>
            </li>
        </div>
    )
}
