import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app-component/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloudinaryContext } from 'cloudinary-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const cloudName = process.env.REACT_APP_CLOUD_NAME;
const cloudName = 'dcrbfhcxx';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CloudinaryContext cloudName={cloudName}>
        <App />
      </CloudinaryContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
