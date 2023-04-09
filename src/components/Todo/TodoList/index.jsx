import React, { useEffect, useContext } from 'react'
import { TodoContext } from '../../../pages/Todo'
import TodoListElement from '../TodoElement'

const TodoList = () => {
  const { todoList } = useContext(TodoContext)
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListElement key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
