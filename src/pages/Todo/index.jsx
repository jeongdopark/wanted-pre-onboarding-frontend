import React, { createContext, useMemo } from 'react'
import TodoInput from '../../components/Todo/TodoInput'
import TodoList from '../../components/Todo/TodoList'
import { useGetTodos } from '../../hook/useGetTodo'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { S } from './style'

export const TodoContext = createContext({
  setTodoTrigger: () => {},
  todo: [],
})

const Todo = () => {
  const navigate = useNavigate()
  const [todoList, getTodo] = useGetTodos()
  const onLogOut = () => {
    toast.success('로그아웃 완료')
    localStorage.removeItem('token')
    navigate('/')
  }
  const value = useMemo(() => ({ todoList, getTodo }), [todoList, getTodo])
  return (
    <S.Container>
      <S.Header>
        <S.Title>Todo List</S.Title>
        <S.LogoutButton onClick={onLogOut}>Logout</S.LogoutButton>
      </S.Header>
      <TodoContext.Provider value={value}>
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
    </S.Container>
  )
}

export default Todo
