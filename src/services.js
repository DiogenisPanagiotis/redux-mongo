import axios from 'axios'

export const getModels = () => axios.get('/api/models')

export const addModel = model => axios.post('/api/models', model)

export const updateModel = newModel => axios.put(`/api/models/${newModel._id}`, newModel)

export const deleteModel = modelId => axios.delete(`/api/models/${modelId}`)

export const getUsers = () => axios.get('/api/users')

export const addUser = user => axios.post('/api/users', user)