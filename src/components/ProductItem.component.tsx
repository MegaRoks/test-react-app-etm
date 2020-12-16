import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { IProduct } from './../interfaces/Product.interface';

interface IProductItemProps extends IProduct {}

export const ProductItemComponent: React.FC<IProductItemProps> = ({ id, title, vendor, pack, price, image }: IProductItemProps) => {
    const classes = useStyles();
    const history = useHistory();

    const selectProduct = (id: string) => {
        history.push(`/catalog/${id}`);
    };

    return (
        <Card className={classes.body}>
            <CardActionArea onClick={selectProduct.bind(this, id)}>
                <CardMedia className={classes.media} image={image} title={title} component={'img'} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'h2'}>
                        {title}
                    </Typography>
                    <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                        <b>Vendor:</b> {vendor}
                    </Typography>
                    <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                        <b>Pack:</b> {pack}
                    </Typography>
                    <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                        <b>Price:</b> {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const useStyles = makeStyles({
    body: {
        width: 345,
        margin: '1.2rem',
    },
    media: {
        height: 140,
    },
});
