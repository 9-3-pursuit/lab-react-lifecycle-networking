import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// *Class Notes -2242023
// a function that takes two arguements
// does debugging stuff for the user
// document.getElementById is rendering where to place the info

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
