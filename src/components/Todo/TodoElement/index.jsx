import React, { useState } from 'react'
import TodoButton from '../TodoButton'
import { S } from './style'
import { updateTodo } from '../../../api/Todo'

const TodoListElement = ({ todo }) => {
  const [buttonFlag, setButtonFlag] = useState(false)
  const [todoValue, setTodoValue] = useState(todo.todo)
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  const onChangeValue = (e) => {
    setTodoValue(e.target.value)
  }

  const handleUpdateCheck = async () => {
    await updateTodo(todo.id, todo.todo, !todo.isCompleted)
    setIsChecked(!isChecked)
  }

  return (
    <S.Container>
      <li key={todo.id}>
        <label>
          <input
            type="checkbox"
            onClick={handleUpdateCheck}
            checked={isChecked}
          />
          {buttonFlag === false ? (
            <span>{todo.todo}</span>
          ) : (
            <input
              data-testid="modify-input"
              value={todoValue}
              onChange={onChangeValue}
            />
          )}
        </label>
        <TodoButton
          btnFlag={buttonFlag}
          setBtnFlag={setButtonFlag}
          todo={todo}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
      </li>
    </S.Container>
  )
}

export default TodoListElement
