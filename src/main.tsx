import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ConfiguratorForm from './pages/ConfiguratorForm';
console.log('Mounting Rackform App...')
ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<ConfiguratorForm />
</React.StrictMode>
);
