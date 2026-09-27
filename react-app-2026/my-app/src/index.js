import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const todoTitle = "Call Family";

const date = new Date(); // <-- this was missing
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// const headingStyle = {
//   backroundColor : "purple",
//   color:"red",
//   textAlign: "center",
//   padding: "15px"
// }

root.render(
  <React.StrictMode>
    <div>
      <h1 className="headingStyle">Welcome</h1>
      <h3>{todoTitle}</h3>
      <p>{dateName}</p>
      <p>{monthName}</p>
      <p>{currentYear}</p>
    </div>
  </React.StrictMode>
);

reportWebVitals();