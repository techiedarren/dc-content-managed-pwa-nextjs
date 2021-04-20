import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';


interface Props {
    layout: any;
}

const CmsLayout: React.SFC<Props> = (props) => {
    const {
        layout,
        ...other
    } = props;

    return (
        <div>
            layout!
        </div>
    );
};

export default CmsLayout;