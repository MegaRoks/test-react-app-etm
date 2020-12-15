import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

interface IHeader {
    title: string;
}

export const HeaderComponent: React.FC<IHeader> = ({ title }: IHeader) => {
    const classes = useStyles();

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant={'h6'} className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});
