import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/main-component/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloudinaryContext } from 'cloudinary-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <CloudinaryContext cloudName='dcrbfhcxx'>
        <App />
      </CloudinaryContext>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
