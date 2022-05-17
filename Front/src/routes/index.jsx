import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Edit from '../pages/Edit/Edit';
// import Edit2Inputs from './pages/Edit2Inputs/Edit2Inputs';
import Admin from '../pages/Admin/Admin';
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
// import AppRouts from './app.routes';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductPage />} />
        
        <Route path="/administrator" element={<Admin />} />
        <Route path="*" element={<h1>404!</h1>} />

        <Route 
          path="/edit-info" 
          element={
            <Edit.Inputs4
              description="Alterar Informações"
              textfield1="Nome"
              textfield2="Sobrenome"
              textfield3="Data de Nascimento"
              textfield4="Sexo"
            />
          } 
        />
        <Route 
          path="/edit-card" 
          element={
            <Edit.Inputs4
            description="Informações do Cartão"
              textfield1="Nome do Cartão"
              textfield2="Número do Cartão"
              textfield3="Data de Vencimento"
              textfield4="CVV"
            />
          } 
        />
        <Route 
          path="/edit-email" 
          element={
            <Edit.Inputs2
              isPassword={false}
              description="Alterar E-mail"
              textfield1="Novo E-mail"
              textfield2="Confirmar novo E-mail"
              />
            } 
        />
        <Route 
          path="/edit-password" 
          element={
            <Edit.Inputs2
            isPassword={true}
            description="Alterar Senha"
            textfield1="Nova Senha"
            textfield2="Confirmar nova Senha"
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default routes;