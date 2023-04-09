import React, { useCallback, useContext } from 'react'
import { updateTodo, deleteTodo } from '../../../api/Todo'
import { TodoContext } from '../../../pages/Todo'

const TodoButton = ({ btnFlag, setBtnFlag, todo, todoValue, setTodoValue }) => {
  const { getTodo } = useContext(TodoContext)
  const onClickBtnFlag = () => {
    setBtnFlag(!btnFlag)
    setTodoValue(todo.todo)
  }

  const handleUpdateTodo = async () => {
    await updateTodo(todo.id, todoValue, todo.isCompleted)
    setBtnFlag(!btnFlag)
    getTodo()
  }

  const handleDelete = async () => {
    await deleteTodo(todo.id)
    getTodo()
  }

  return (
    <React.Fragment>
      {btnFlag === false ? (
        <div>
          <button data-testid="modify-button" onClick={onClickBtnFlag}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      ) : (
        <div>
          <button data-testid="submit-button" onClick={handleUpdateTodo}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={onClickBtnFlag}>
            취소
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default TodoButton
