import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfiguratorForm from './pages/ConfiguratorForm';
import './index.css';

console.log('Mounting Rackform app...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfiguratorForm />
  </React.StrictMode>
);