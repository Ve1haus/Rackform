
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfiguratorForm from './pages/ConfiguratorForm';
import Preview from './pages/Preview';
import Summary from './pages/Summary';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfiguratorForm />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}
