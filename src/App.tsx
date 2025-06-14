
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConfiguratorForm from './pages/ConfiguratorForm';
import Preview from './pages/Preview';
import Summary from './pages/Summary';
import logo from './assets/rackform-logo.jpeg';

export default function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="Rackform Logo" />
        <h1>Rackform</h1>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ConfiguratorForm />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}
