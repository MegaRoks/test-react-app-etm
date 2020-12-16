import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { products } from './../../data/products';
import { SET_PRODUCT } from './Product.type';
import { IProductProviderProps } from './ProductContext.interface';
import { initialState, reducer } from './ProductContext.reducer';

const ProductContext = createContext(initialState);

export const useProduct = () => {
    return useContext(ProductContext);
};

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }: IProductProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: SET_PRODUCT, payload: products });
    }, []);

    return (
        <ProductContext.Provider value={{ productsList: state.productsList, selectedProduct: state.selectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
