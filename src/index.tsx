import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './App';

import reportWebVitals from './reportWebVitals';
import './index.scss';

const app: JSX.Element = (
    <StrictMode>
        <App />
    </StrictMode>
);

render(app, document.getElementById('root'));

reportWebVitals();
