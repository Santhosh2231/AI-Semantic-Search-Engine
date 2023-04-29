import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home';
import Voice from './Screens/Voice';
import Text from "./Screens/Text";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/voice" element={<Voice />} />
       <Route path="/text" element={<Text />} />
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App