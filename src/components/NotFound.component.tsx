import React from 'react';
import { makeStyles } from '@material-ui/core';

export const NotFountComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <div>Page Not Found</div>
        </div>
    );
};

const useStyles = makeStyles({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
