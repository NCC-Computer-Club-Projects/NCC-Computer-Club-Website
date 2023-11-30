import '@styles/global-styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import developerMessage from './developer-message.js';
developerMessage(); // indicate that app is ready for development

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);