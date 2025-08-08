import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar';
import Footer from './components/footer';

import HomePage from './pages/home';
import Flavors from './pages/flavors';
import NotFound from './pages/404'

import './App.css'


function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capabilities" element={<h1>Capabilities</h1>} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
