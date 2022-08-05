import React from 'react'
import Todos from './todos'

function TodosList({todos , setTodos , filtered}) {
  return (

    <ul className='todo-list'>
        {filtered.map ( (todo) => (
            <Todos key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </ul>
  )
}

export default TodosList
