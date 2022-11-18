import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/global.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
