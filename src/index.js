import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { redux } from './redux'; // first redux is below object redux and the second is folder name redux we created within src folder (just remember that it could be named also store as mentioned within my info.js file)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={redux}> {/* this should be store here */}
  {/* object redux above is the folder name we created for redux (should be either store or redux as mentioned within my info.js file created within src folder) */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
