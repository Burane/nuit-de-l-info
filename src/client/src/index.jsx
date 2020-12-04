import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}