import React from 'react';
import './App.css';  // CSS styles
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Internships from './components/Internships';
import Projects from './components/Projects';
import CenteredImage from './CenteredImage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Internships">Internships</Link> {/* Corrected spelling here */}
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <div>
        <h1>Welcome to My Centered Image App</h1>
        </div>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Internships" element={<Internships />} /> {/* Consistent spelling in route */}
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;
