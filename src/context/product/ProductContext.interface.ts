import { IProduct } from './../../interfaces/Product.interface';
import { SET_PRODUCT } from './Product.type';

export interface IProductState {
    readonly productsList: IProduct[];
    readonly selectedProduct?: IProduct | undefined;
}

export interface IProductProviderProps {
    readonly children: React.ReactElement;
}

export type TProductAction = { type: typeof SET_PRODUCT; payload: IProduct[] };
