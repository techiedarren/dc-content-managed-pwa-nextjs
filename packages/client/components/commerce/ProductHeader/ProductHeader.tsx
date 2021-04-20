import React from 'react';
import { Typography, withStyles, WithStyles } from '@material-ui/core';
import ProductAttribute from '../ProductAttribute';
import clsx from 'clsx';

const styles = theme => ({
    root: {
        width: 304
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties
}

const ProductHeader: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className)} {...other}>
            <Typography variant="h3">
                <ProductAttribute variant="brand" />
            </Typography>
            <Typography component="h1" variant="h2">
                <ProductAttribute variant="name" />
            </Typography>
        </div>
    );
};

export default withStyles(styles)(ProductHeader);