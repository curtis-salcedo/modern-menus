import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { BusinessProvider } from './utilities/BusinessContext';
import App from './pages/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BusinessProvider>
        <App />
      </BusinessProvider>
    </Router>
  </React.StrictMode>
);
