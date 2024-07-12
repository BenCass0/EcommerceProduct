import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { BrowserRouter } from 'react-router-dom';
import { CountProvider } from './components/CountContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountProvider>
        <App />
      </CountProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
