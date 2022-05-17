import React, { createContext, useState } from 'react';
import {signInServices} from '../services/auth';

const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {
  // const [token, setToken] = useState('');  
  const [user, setUser] = useState(null); 
  
  const signIn = async() => {
    const response = await signInServices();
    console.log(response)

    // console.log('login auth', {email, password})
    // setUser({id:'12', email})
  };

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;