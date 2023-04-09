import React, { useContext } from 'react'
import { TodoContext } from '../../../pages/Todo'
import TodoListElement from '../TodoElement'
import { S } from './style'
const TodoList = () => {
  const { todoList } = useContext(TodoContext)
  return (
    <S.Container>
      <ul>
        {todoList.map((todo) => (
          <TodoListElement key={todo.id} todo={todo} />
        ))}
      </ul>
    </S.Container>
  )
}

export default TodoList
