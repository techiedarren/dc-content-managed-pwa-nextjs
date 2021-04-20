import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import clsx from 'clsx';

const styles = theme => ({
    root: {
        background: 'white'
    }
});

export enum TileVariant {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
    variant?: TileVariant;
}

const Tile: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        variant,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className, {
            // [classes.horizontal]: variant === HeroCardVariant.HORIZONTAL,
            // [classes.vertical]: variant === HeroCardVariant.VERTICAL
        })} {...other}>
            
        </div>
    );
};

export default withStyles(styles)(Tile);