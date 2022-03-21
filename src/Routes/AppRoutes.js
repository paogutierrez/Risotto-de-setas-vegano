import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Inicio from '../components/Inicio';
import Registro from '../components/Registro';
import Footer from '../components/Footer';
import PlatoDeHoy from '../components/PlatoDeHoy';

const AppRoutes = () => {
  return (
    <div>
        <Router>
            <Routes >
                <Route path="/*" element={<Inicio />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/PlatoDeHoy" element={<PlatoDeHoy />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  )
}

export default AppRoutes