import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use((config) => {
  const userAccessToken = localStorage.getItem('token')
  if (userAccessToken !== null && config.headers) {
    config.headers['Authorization'] = `Bearer ${userAccessToken}`
  }
  return config
})
