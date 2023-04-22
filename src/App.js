import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Header from './Components/Header';
import ParcoursComponent from './Components/ParcoursComponent';
import AboutComponent from './Components/AboutComponent';
import HomeComponent from './Components/HomeComponent';
import ProjectsComponent from './Components/ProjectsComponent';
import ContactComponent from './Components/ContactComponent';
import FooterComponent from './Components/FooterComponent';
import CertifComponent from './Components/CertifComponent';



function App() {
  
    return (
      <Router>
      <Header />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/projects" element={<ProjectsComponent/>} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/parcours" element={<ParcoursComponent />} />
          <Route path="/certifications" element={<CertifComponent />} />
        </Routes>
      </div>
      <FooterComponent/>
    </Router>
    );

}

export default App;
