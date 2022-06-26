import axios from 'axios';

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API
  baseURL: 'http://localhost:3001/'
});

export const createSession = async (email, password) => {
  return api.post('/sessions', {email, password})
}

export const createSearch = async (input) => {
  
  return api.get('/books/?title=')
}