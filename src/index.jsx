import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

window.initPlugin = (element) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    element
  );
};
