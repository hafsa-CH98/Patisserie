import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import About from "./pages/About"
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"


function App() {

  return (
    <>
    <div>
    <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route index element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#menu" element={<Menu />} />
          <Route path="#contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
