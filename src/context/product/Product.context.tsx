import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { IProduct } from './../../interfaces/Product.interface';
import { products } from './../../data/products';
import { SET_PRODUCT } from './Product.type';
import { IProductProviderProps } from './ProductContext.interface';

interface IProductState {
    readonly productsList: IProduct[];
}

const ProductContext = createContext<IProductState>({ productsList: [] });

export const useProduct = () => {
    return useContext(ProductContext);
};

const reducer = (state: IProductState, action: any) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, productsList: action.payload };
        default:
            return state;
    }
};

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }: IProductProviderProps) => {
    const [state, dispatch] = useReducer(reducer, { productsList: [] });

    useEffect(() => {
        dispatch({ type: SET_PRODUCT, payload: products });
    }, []);

    return <ProductContext.Provider value={{ productsList: state.productsList }}>{children}</ProductContext.Provider>;
};
