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
import UserPage from '../pages/UserPage/UserPage';
import Favorites from '../pages/Favorites/Favorites';
import Cart from '../pages/Cart/Cart';
import AdmProducts from '../pages/AdmProducts/AdmProducts';
// import AppRouts from './app.routes';
// import AdminRoutes from './admin.routes';

const routes = () => {

  const PrivateUser = ({children}) => {
    const { signed, loading } = useContext(AuthContext);
    
    if(loading) {
      return <div className='loading'>Carregando...</div>
    }
    if(!signed) {
      return <Navigate to='/login' />
    }
    return children;
  }
  const PrivateAdmin = ({children}) => {
    const { isAdmin, loading } = useContext(AuthContext);
    
    if(loading) {
      return <div className='loading'>Carregando...</div>
    }
    if(!isAdmin) {
      return <Navigate to='/' />
    }
    return children;
  }

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<h1>404!</h1>} />
        
        {/* User Routes */}
        <Route 
          path="/user" 
          element={
            <PrivateUser>
              <UserPage />
            </PrivateUser>
          } 
        />
        <Route 
          path="/favorites" 
          element={
            <PrivateUser>
              <Favorites />
            </PrivateUser>
          } 
        />      
        <Route 
          path="/cart" 
          element={
            <PrivateUser>
              <Cart />
            </PrivateUser>
          } 
        />   

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <PrivateAdmin>
              <Admin />
            </PrivateAdmin>
          } 
        />
        <Route 
          path="/editproducts" 
          element={
            <PrivateAdmin>
              <AdmProducts typebtn="edit"/>
            </PrivateAdmin>
          } 
        />
        <Route 
          path="/createproduct" 
          element={
            <PrivateAdmin>
              <AdmProducts typebtn="create"/>
            </PrivateAdmin>
          } 
        />

        {/* Edit Routes */}
        <Route 
          path="/edit-info" 
          element={
            <PrivateUser>
              <Edit.Inputs4
                description="Alterar Informa????es"
                textfield1="Nome"
                textfield2="Sobrenome"
                textfield3="Data de Nascimento"
                textfield4="Sexo"
                navig="/user"
              />
            </PrivateUser>
          } 
        />
        <Route 
          path="/edit-card" 
          element={
            <PrivateUser>
              <Edit.Inputs4
                description="Informa????es do Cart??o"
                textfield1="Nome do Cart??o"
                textfield2="N??mero do Cart??o"
                textfield3="Data de Vencimento"
                textfield4="CVV"
                navig="/user"
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
                navig="/user"
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
                navig="/user"
              />
            </PrivateUser>
          } 
        />
      </Routes>
    </div>
  )
}

export default routes;