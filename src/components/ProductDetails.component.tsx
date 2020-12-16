import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { IProduct } from './../interfaces/Product.interface';

interface IProductDitailsProps extends IProduct {}

export const ProductDetailsComponent: React.FC<IProductDitailsProps> = ({ title, vendor, pack, price, image }: IProductDitailsProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.body}>
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
        </Card>
    );
};

const useStyles = makeStyles({
    body: {
        width: 600,
        margin: '1.5rem',
    },
    media: {
        height: 340,
    },
});
