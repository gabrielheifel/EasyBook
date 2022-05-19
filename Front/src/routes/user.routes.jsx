import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from '../pages/Edit/Edit';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
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

export default AppRoutes;