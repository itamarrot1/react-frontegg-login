import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-zhaeejfbj5zh.frontegg.com',
  clientId: 'b872758b-2e41-4853-93be-274c8ea970c1', 
  appId: 'be1fac84-f1f7-439b-bbe6-39c5d9d4d5b2'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>
    </React.StrictMode>
);
