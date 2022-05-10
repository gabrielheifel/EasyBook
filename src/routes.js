import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Edit4Inputs from './Pages/Edit4Inputs/Edit4Inputs';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/edit-info" 
          element={
            <Edit4Inputs 
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
            <Edit4Inputs 
              description="Informações do Cartão"
              textfield1="Nome do Cartão"
              textfield2="Número do Cartão"
              textfield3="Data de Vencimento"
              textfield4="CVV"
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default routes