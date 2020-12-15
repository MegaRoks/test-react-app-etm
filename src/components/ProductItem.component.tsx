import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

export const ProductItemComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.body}>
            <CardActionArea onClick={() => console.log(1111)}>
                <CardMedia className={classes.media} image={'/static/images/cards/contemplative-reptile.jpg'} title={'Contemplative Reptile'} />
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'h2'}>
                        Lizard
                    </Typography>
                    <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={'small'} color={'primary'}>
                    Share
                </Button>
                <Button size={'small'} color={'primary'}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

const useStyles = makeStyles({
    body: {
        maxWidth: 345,
        margin: '1.2rem',
    },
    media: {
        height: 140,
    },
});
