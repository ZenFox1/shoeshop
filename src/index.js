import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar';
import Footer from './components/footer';
//component_import
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div key="App" className="App">
      <div className="container" key="container">
        <div className="header" key="header">
          <Navbar />
        </div>
        <div className="content" key="content">
          <App />
        </div>
        <div className="footer" key="footer">
          <Footer />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
