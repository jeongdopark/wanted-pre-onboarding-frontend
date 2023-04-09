import React, { useCallback, useState, useEffect } from 'react'
import { getTodos } from '../api/Todo'

export const useGetTodos = () => {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getTodo = useCallback(async () => {
    const { data: res } = await getTodos()
    console.log(res)
    setTodoList(res)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getTodo()
  }, [])

  return [todoList, getTodo, isLoading]
}
