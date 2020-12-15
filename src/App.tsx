import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Routers } from './routers/Routers';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
};
