import React, { Fragment } from 'react';
import { Container, makeStyles } from '@material-ui/core';

import { ProductItemComponent } from './../components/ProductItem.component';
import { HeaderComponent } from './../components/Header.component';

export const ProductListPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <HeaderComponent title={'Catalog'} />

            <Container className={classes.body}>
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
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
