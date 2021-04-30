import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/App.css'


function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
              <Navbar />
              <Home />
          </div>
        </div>
      </div>
  );
}

export default App;
