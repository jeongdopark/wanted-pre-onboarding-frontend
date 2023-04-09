import React, { createContext, useMemo, useState, useEffect } from 'react'
import TodoInput from '../../components/Todo/TodoInput'
import TodoList from '../../components/Todo/TodoList'
import { useGetTodos } from '../../hook/useGetTodo'
import { S } from './style'

export const TodoContext = createContext({
  setTodoTrigger: () => {},
  todo: [],
})

const Todo = () => {
  const [todoList, getTodo] = useGetTodos()

  const value = useMemo(() => ({ todoList, getTodo }), [todoList, getTodo])
  return (
    <S.Container>
      <TodoContext.Provider value={value}>
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
    </S.Container>
  )
}

export default Todo
