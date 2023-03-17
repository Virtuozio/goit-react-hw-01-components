import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import clsx from 'clsx';
// const className = clsx(
//   'first',
//   10,
//   undefined && 'second',
//   true && 'third',
//   false ? 'fourth' : 'fifth'
// );
// console.log(className); // "first 10 third fifth"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
