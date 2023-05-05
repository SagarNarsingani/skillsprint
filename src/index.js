import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain='dev-3pot2rspbcjp0z0d.us.auth0.com'
      clientId='DCxN2BIX70WiIS1ZWOgfSxEouQGMOJRn'
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/dashboard/home'
      }}
      
    > */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);