import React, { Fragment } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { useProduct } from './../context/product/Product.context';
import { ProductItemComponent } from './../components/ProductItem.component';
import { HeaderComponent } from './../components/Header.component';

interface IProductsListProps extends RouteComponentProps { }

export const ProductListPage: React.FC<IProductsListProps> = ({ history }: IProductsListProps) => {
    const classes = useStyles();
    const { productsList } = useProduct();

    console.log(productsList);

    return (
        <Fragment>
            <HeaderComponent title={'Catalog'} />

            <Container className={classes.body}>
                {productsList.map((product) => (
                    <ProductItemComponent
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        vendor={product.vendor}
                        pack={product.pack}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </Container>
        </Fragment>
    );
};

const useStyles = makeStyles({
    body: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
