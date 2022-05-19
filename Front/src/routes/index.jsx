import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Edit from '../pages/Edit/Edit';
// import Edit2Inputs from './pages/Edit2Inputs/Edit2Inputs';
import Admin from '../pages/Admin/Admin';
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
// import AppRouts from './app.routes';
// import AdminRoutes from './admin.routes';

const routes = () => {

  const PrivateUser = ({children}) => {
    const { signed } = useContext(AuthContext);
    if(!signed) {
      return <Navigate to='/login' />
    }
    return children;
  }
  const PrivateAdmin = ({children}) => {
    const { isAdmin } = useContext(AuthContext);
    if(!isAdmin) {
      return <Navigate to='/' />
    }
    return children;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductPage />} />
        
        <Route 
          path="/admin" 
          element={
            <PrivateAdmin>
              <Admin />
            </PrivateAdmin>
          } 
        />
        <Route path="*" element={<h1>404!</h1>} />

        <Route 
          path="/edit-info" 
          element={
            <PrivateUser>
              <Edit.Inputs4
                description="Alterar Informações"
                textfield1="Nome"
                textfield2="Sobrenome"
                textfield3="Data de Nascimento"
                textfield4="Sexo"
              />
            </PrivateUser>
          } 
        />
        <Route 
          path="/edit-card" 
          element={
            <PrivateUser>
              <Edit.Inputs4
              description="Informações do Cartão"
                textfield1="Nome do Cartão"
                textfield2="Número do Cartão"
                textfield3="Data de Vencimento"
                textfield4="CVV"
              />
            </PrivateUser>
          } 
        />
        <Route 
          path="/edit-email" 
          element={
            <PrivateUser>
              <Edit.Inputs2
                isPassword={false}
                description="Alterar E-mail"
                textfield1="Novo E-mail"
                textfield2="Confirmar novo E-mail"
                />
            </PrivateUser>
            } 
        />
        <Route 
          path="/edit-password" 
          element={
            <PrivateUser>
              <Edit.Inputs2
              isPassword={true}
              description="Alterar Senha"
              textfield1="Nova Senha"
              textfield2="Confirmar nova Senha"
              />
            </PrivateUser>
          } 
        />
      </Routes>
    </div>
  )
}

export default routes;