import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
        <div className='mt-2 text-3xl'>Todos</div>
        {todos.map((todo) => (
            <li key={todo.id} className='p-2 bg-gray-500 list-none mt-4 flex justify-between rounded-md'>
                {todo.text}
                <button onClick={() => {dispatch(removeTodo(todo.id))}}>delete</button>
            </li>
        ))}
    </>
  )
}

export default Todos