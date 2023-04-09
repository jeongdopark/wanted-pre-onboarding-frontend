import React, { useContext } from 'react'
import { updateTodo, deleteTodo } from '../../../api/Todo'
import { TodoContext } from '../../../pages/Todo'
import { S } from './style'

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
    <S.Container>
      {btnFlag === false ? (
        <div>
          <S.Button data-testid="modify-button" onClick={onClickBtnFlag}>
            수정
          </S.Button>
          <S.Button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </S.Button>
        </div>
      ) : (
        <div>
          <S.Button data-testid="submit-button" onClick={handleUpdateTodo}>
            제출
          </S.Button>
          <S.Button data-testid="cancel-button" onClick={onClickBtnFlag}>
            취소
          </S.Button>
        </div>
      )}
    </S.Container>
  )
}

export default TodoButton
