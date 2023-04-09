import React, { useState, useContext, useCallback } from 'react'
import { S } from './style'
import { createTodo } from '../../../api/Todo'
import { TodoContext } from '../../../pages/Todo'

const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const { getTodo } = useContext(TodoContext)

  const handleSubmit = useCallback(
    async (e) => {
      if (todo === '') {
        alert('내용을 입력해 주세요')
        e.preventDefault()
        return
      }
      e.preventDefault()
      await createTodo(todo)
      setTodo('')
      getTodo()
    },
    [getTodo, todo],
  )

  const onChangeInput = (e) => {
    setTodo(e.target.value)
  }

  return (
    <React.Fragment>
      <S.FormContainer onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          type="text"
          value={todo}
          onChange={onChangeInput}
        />
        <S.Button data-testid="new-todo-add-button" type="submit">
          추가
        </S.Button>
      </S.FormContainer>
    </React.Fragment>
  )
}

export default TodoInput
