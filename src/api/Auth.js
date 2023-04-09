import { instance } from './client'

export const signInApi = async (email, password) => {
  try {
    const response = await instance
      .post('/auth/signin', { email, password })
      .then((res) => {
        return res
      })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const signUpApi = async (email, password) => {
  try {
    const response = await instance
      .post('/auth/signup', { email, password })
      .then((res) => {
        return res
      })
    return response
  } catch (error) {
    return error.response.data.statusCode
  }
}
