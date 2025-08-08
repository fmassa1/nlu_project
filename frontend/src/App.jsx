import { useState } from 'react'

import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />

      <h1>Vite + React</h1>
      <Footer />
    </>
  )
}

export default App
