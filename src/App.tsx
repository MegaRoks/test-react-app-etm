import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Routers } from './routers/Routers';
import { ProductProvider } from './context/product/Product.context';

export const App: React.FC = () => {
    return (
        <ProductProvider>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </ProductProvider>
    );
};
