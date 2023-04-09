import { instance } from './client'

export const getTodos = async () => {
  return instance.get('/todos')
}

export const createTodo = async (todo) => {
  return instance.post('/todos', { todo })
}

export const updateTodo = async (id, todo, isCompleted) => {
  return instance.put(`/todos/${id}`, { todo, isCompleted })
}

export const deleteTodo = async (id) => {
  return instance.delete(`/todos/${id}`)
}
