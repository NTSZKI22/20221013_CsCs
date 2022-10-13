import React from 'react';
import ReactDOM from 'react-dom/client';
import Komponens1 from './components/komponens1';
import Komponens3 from './components/komponens3';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Komponens3></Komponens3>  
    <Komponens1></Komponens1>
  </React.StrictMode>
);
