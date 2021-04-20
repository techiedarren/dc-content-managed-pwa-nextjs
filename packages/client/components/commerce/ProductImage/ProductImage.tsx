import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import clsx from 'clsx';
import { useProduct } from '../WithProduct/WithProduct';

const styles = theme => ({
    root: {

    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties
}

const ProductImage: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        ...other
    } = props;

    const product = useProduct();

    return (
        <div className={clsx(classes.root, className)} {...other}>
            { product && product.attributes.images.length > 0 && <img src={`https://media.very.co.uk/i/very/${product.attributes.images[0].identifier}?$550x733_standard$`} />}
        </div>
    );
};

export default withStyles(styles)(ProductImage);