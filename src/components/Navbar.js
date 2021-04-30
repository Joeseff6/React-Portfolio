import React from 'react';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    // <Router>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul>
    //         <li className="nav-item">Home</li>
    //         <li className="nav-item">Projects</li>
    //         <li className="nav-item">Portfolio</li>
    //         <li className="nav-item">Contact Me</li>
    //       </ul>
    //     </div>
    //     <Route path="/" component={<Home />} />
    //     <Route path="/portfolio" exact component={<Portfolio />} />
    //     <Route path="/contact" exact component={<Contact />} />
    //     <Route path="/projects" exact component={<Projects />} />
    //   </nav>
    // </Router >
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Route path="/" element={<Home />} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/contact" exact element={<Contact />} /> */}
    </Router>

  )

}

export default Navbar;