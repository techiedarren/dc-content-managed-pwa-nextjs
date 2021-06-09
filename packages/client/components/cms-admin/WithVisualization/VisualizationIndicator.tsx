import React from 'react';
import { CircularProgress, Fab, withStyles, WithStyles } from '@material-ui/core';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';

import FlashOnIcon from '@material-ui/icons/FlashOn';
import CheckIcon from '@material-ui/icons/Check';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import FlashOffIcon from '@material-ui/icons/FlashOff';

import { useVisualization } from './WithVisualization';

const styles = theme => ({
    root: {
        position: 'fixed' as 'fixed',
        right: 10,
        top: 10,
        zIndex: 99999
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative' as 'relative',
    },
    fabProgress: {
        position: 'absolute' as 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        }
      },
      buttonFailed: {
        backgroundColor: grey[500],
        '&:hover': {
          backgroundColor: grey[700],
        }
      }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties
}

const VisualizationIndicator: React.SFC<Props> = (props) => {
    const {
        className,
        classes,
        ...other
    } = props;

    const {
        status
    } = useVisualization();

    return (
        <div className={clsx(classes.root, className)}>
            <div className={classes.wrapper}>
                <Fab
                    color="secondary"
                    className={clsx({
                        [classes.buttonSuccess]: status === 'connected',
                        [classes.buttonFailed]: status === 'failed'
                    })}
                >
                    { status === 'connecting' && <FlashOffIcon /> }
                    { (status === 'connected' || status === 'reloading') && <FlashOnIcon /> }
                    { status === 'failed' && <FlashOffIcon /> }
                </Fab>
                {(status === 'connecting' || status === 'reloading') && <CircularProgress size={68} color="secondary" className={classes.fabProgress} />}
            </div>
        </div>
    );
};

export default withStyles(styles)(VisualizationIndicator);