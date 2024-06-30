import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="*" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/work" Component={Work} />
        <Route exact path="/skills" Component={Skills} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
    </>
  );
}

export default App;