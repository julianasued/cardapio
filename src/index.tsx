import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';
import Cardapio from './pages/Cardapio';


ReactDOM.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
