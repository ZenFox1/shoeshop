import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//css
import './index.css';
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"


//component_import
import App from './App';
import Servicebot from './servicebot/servicebot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Servicebot />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
