import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/layouts/Main';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
