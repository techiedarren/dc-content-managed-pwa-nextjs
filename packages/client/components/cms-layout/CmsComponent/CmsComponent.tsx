import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react'
import { CmsContent } from '../../../lib/cms/CmsContent';
import { ProductAttribute, ProductHeader, ProductImage } from '../../commerce';
import { Section } from '../../ui';

type CmsComponentData = {
    name: string;
    properties: any;
    slots: {
        [name: string]: CmsComponentData[]
    }
};

interface Props {
    data?: CmsComponentData
}

const mapping: any = {
    'section': Section,
    'typography': Typography,
    'grid': (props) => <Grid {...props} container />,
    'product_attribute': ProductAttribute,
    'product_header': ProductHeader,
    'product_image': ProductImage
};

const CmsComponent: FC<Props> = ({data}) => {
    if (!data) {
        return <></>;
    }

    const {
        name,
        properties,
        slots
    } = data;
    
    const Component = mapping[name];
    if (!Component) {
        return <></>;
    }

    const hydratedSlots: { [slotName: string]: React.ReactElement } = {};
    if (slots) {
        for (let slotName of Object.keys(slots)) {
            hydratedSlots[slotName] = <>{slots[slotName].map((child) => <CmsComponent data={child} />)}</>;
        }
    }

    return <Component {...properties} {...hydratedSlots} />;
}

export default CmsComponent;