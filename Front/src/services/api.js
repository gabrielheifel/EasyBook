import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const createSession = async (email, password) => {
  return api.post('/sessions', {email, password})
}
