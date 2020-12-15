import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';

import { HeaderComponent } from './../components/Header.component';

export const ProductDetailsPage: React.FC = () => {
    return (
        <Fragment>
            <HeaderComponent title={'Product'} />

            <Container>
                <div>111</div>
            </Container>
        </Fragment>
    );
};
