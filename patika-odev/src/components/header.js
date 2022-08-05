import React, { useState } from 'react'
import Footer from './footer'
import TodosList from './todosList'

function Header() {

    const [inputValue , setInputValue] = useState("")
    const [todos, setTodos] = useState([])
    const[filtered ,setFiltered] = useState(todos)


    const addTodos = (e) => {
        e.preventDefault()

        let newTodos = {
            name : inputValue,
            id : new Date().getTime(),
            completed : false
        }


        setTodos([...todos , newTodos])

        setInputValue("")
    }

  return (
    <div className='header'>
        <h1>todos</h1>
        <form onSubmit={ (e) => {addTodos(e)}}>
            <input className='new-todo' placeholder="what's needs to be done"  value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)  
            }} />
        </form>
        <TodosList todos={todos} setTodos={setTodos} filtered={filtered} />
        <Footer todos={todos} setTodos={setTodos} setFiltered={setFiltered}/>
    </div>
  )
}

export default Header