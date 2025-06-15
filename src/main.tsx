import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConfiguratorForm from './pages/ConfiguratorForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<BrowserRouter>
<Routes>
<Route path="/" element={<ConfiguratorForm />} />
</Routes>
</BrowserRouter>
</React.StrictMode>
);
