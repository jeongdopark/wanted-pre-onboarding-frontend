import React, { useCallback, useState, useEffect } from 'react'
import { getTodos } from '../api/Todo'

export const useGetTodos = () => {
  const [todoList, setTodoList] = useState([])

  const getTodo = useCallback(async () => {
    const { data: res } = await getTodos()
    setTodoList(res)
  }, [])

  useEffect(() => {
    getTodo()
  }, [])

  return [todoList, getTodo]
}
