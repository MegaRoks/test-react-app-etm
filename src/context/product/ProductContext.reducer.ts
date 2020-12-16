import { SET_PRODUCT } from './Product.type';
import { IProductState, TProductAction } from './ProductContext.interface';

export const initialState: IProductState = {
    productsList: [],
};

export const reducer = (state: IProductState, action: TProductAction): IProductState => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, productsList: action.payload };
        default:
            return state;
    }
};
