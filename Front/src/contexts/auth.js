import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { signInServices } from '../services/auth';

const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  // const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false)

  const login = (email, password) => {
    console.log('login', {email, password})
    console.log('isAdmin:', isAdmin);

    if(password === 'secret') {
      setUser({id: '123', email});
      setIsAdmin(false);
      navigate('/edit-info');
    }
    if(email === 'admin' && password === 'admin') {
      setUser({id: '1', email});
      setIsAdmin(true);
      navigate('/admin');
    }
  }
  
  const logout = () =>{
    console.log('logout');
    setUser(null);
    setIsAdmin(false)
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{signed:!!user, user, isAdmin, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;