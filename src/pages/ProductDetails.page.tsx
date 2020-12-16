import React, { Fragment } from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { useProduct } from './../context/product/Product.context';
import { HeaderComponent } from './../components/Header.component';
import { ProductDetailsComponent } from './../components/ProductDetails.component';

export const ProductDetailsPage: React.FC<RouteComponentProps> = ({ match }: RouteComponentProps) => {
    const { productsList } = useProduct();
    const classes = useStyles();
    // @ts-ignore
    const productId = match.params.productId;
    const product = productsList.find((product) => product.id === productId);

    return (
        <Fragment>
            <HeaderComponent title={'Product'} />

            <Container className={classes.body}>
                {product ? (
                    <ProductDetailsComponent
                        id={product.id}
                        title={product.title}
                        vendor={product.vendor}
                        pack={product.pack}
                        price={product.price}
                        image={product.image}
                    />
                ) : (
                    <Typography className={classes.label} variant={'body2'} color={'textSecondary'} component={'p'}>
                        Product Not Found
                    </Typography>
                )}
            </Container>
        </Fragment>
    );
};

const useStyles = makeStyles({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginTop: '1.5rem',
    },
});
