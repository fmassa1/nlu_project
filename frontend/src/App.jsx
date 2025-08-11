import { Routes, Route } from 'react-router-dom';


import Navbar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';

import HomePage from './pages/Home/home';
import Flavors from './pages/Flavors/flavors';
import FlavorCategoryPage from './pages/FlavorCategoryPage/flavorpage';
import NotFound from './pages/NotFound/404'

import './styles/App.css'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/flavors/:categorySlug" element={<FlavorCategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
