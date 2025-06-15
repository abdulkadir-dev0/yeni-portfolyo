import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setup } from './setup';

// Global kurulumu çalıştır
setup();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);