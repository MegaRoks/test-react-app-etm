import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProductListPage } from './../pages/ProductsList.page';
import { ProductDetailsPage } from './../pages/ProductDetails.page';
import { NotFountComponent } from './../components/NotFound.component';

export const Routers: React.FC = () => {
    return (
        <Switch>
            {/* <Route exact path={'/'} component={HomeComponent} /> */}
            <Route exact path={'/catalog'} component={ProductListPage} />
            <Route exact path={'/catalog/:productId'} component={ProductDetailsPage} />
            <Route path={'*'} component={NotFountComponent} />
        </Switch>
    );
};
