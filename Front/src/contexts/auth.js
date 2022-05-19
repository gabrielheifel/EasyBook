import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { api, createSession } from '../services/api';

const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {
  
  const navigate = useNavigate();
  // const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if(recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }
    setLoading(false);
  },[]);


  const login = async (email, password) => {
    // console.log('isAdmin:', isAdmin);
    
    const loggedUser = {
      id: '12',
      email,
    }

    // PARA QUANDO A API OFICIAL ESTIVER PRONTA
    // const response = await createSession(email, password) 
    // console.log(response);

    // const loggedUser = response;
    // const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    // localStorage.setItem("token", token);

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    if(password === 'secret') {
      setUser(loggedUser);
      setIsAdmin(false);
      navigate('/edit-info');
    };
    if(email === 'admin' && password === 'admin') {
      setUser(loggedUser);
      setIsAdmin(true);
      navigate('/admin');
    };
  }
  
  const logout = () =>{
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // api.defaults.headers.Authorization = null;
    
    setIsAdmin(false);
    navigate('/');
  }

  return (
    <AuthContext.Provider 
      value={{
        signed:!!user,
        user, 
        isAdmin, 
        loading, 
        login, 
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;