import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/administrator" element={<Admin />} />
        <Route path="*" element={<h1>404!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes;