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
import Courses from './pages/Courses';
import Frontend from './pages/SingleCoursesDet/Frontend';
import Backend from './pages/SingleCoursesDet/Backend';
import UiDesign from './pages/SingleCoursesDet/UiDesign';
import DataScience from './pages/SingleCoursesDet/DataScience';
import DigMarketing from './pages/SingleCoursesDet/DigMarketing';
import Python from './pages/SingleCoursesDet/Python';
import MobileDev from "./pages/SingleCoursesDet/MobileDev";
import Graphics from './pages/SingleCoursesDet/Graphics';
import IELTS from './pages/SingleCoursesDet/IELTS';

function App() {

  // ..
 

  return (
   <>
    <Routes>
     <Route path="/plc" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/plc/contact" element={<Contact />} />
      <Route path="/plc/about" element={<About />} />
      <Route path="/plc/courses" element={<Courses />} />
      <Route path="/plc/courses/frontend" element={<Frontend />} />
      <Route path="/plc/courses/backend" element={<Backend />} />
      <Route path="/plc/courses/uidesign" element={<UiDesign />} />
      <Route path="/plc/courses/datascience" element={<DataScience />} />
      <Route path="/plc/courses/digitalmarketing" element={<DigMarketing />} />
      <Route path="/plc/courses/python" element={<Python />} />
      <Route path="/plc/courses/mobileappdevelopment" element={<MobileDev />} />
      <Route path="/plc/courses/graphics&multimedia" element={<Graphics />} />
      <Route path="/plc/courses/ieltstraining" element={<IELTS />} />
     </Route>
    </Routes>
   </>
  );
}

export default App
