import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar.jsx';
import Home from "./Home.jsx"
import Login from './Login.jsx';
import ResponsiveAppBar from './Components/Newnavbar.jsx';
import Portfolio from './Portfolio.jsx'
import Pricing from './Pricing.jsx';
import Footer from './Components/Footer.jsx';
import Uploadpic from './Uploadpic.jsx';
function App() {
  
  return (
    <>
   <Router>
      <Navbar/>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Uploadpic />} />
      </Routes>
       <Footer/>
    </Router>
    </>


  )
}

export default App
