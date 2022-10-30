import { useState, useEffect } from 'react'
import './App.css'
import Homepage from './pages/Homepage';
import {
 Routes,
 Route,
} from "react-router-dom";
import Layout from './Layout';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {

  // ..
 

  return (
   <>
    <Routes>
     <Route path="/plc" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/plc/contact" element={<Contact />} />
      <Route path="/plc/about" element={<About />} />
     </Route>
    </Routes>
   </>
  );
}

export default App
