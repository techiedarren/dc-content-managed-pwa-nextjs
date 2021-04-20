import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { useProduct } from '../WithProduct/WithProduct';

interface Props {
    variant?: ProductAttributeVariant
}

export type ProductAttributeVariant = 'name' | 'brand' | 'product_id';

const ProductAttribute: React.FC<Props> = (props) => {
    const {
        variant = 'name'
    } = props;

    const product = useProduct();
    if (!product) {
        return;
    }

    let attributeValue: string | undefined = undefined;

    switch (variant) {
        case 'name':
            attributeValue = product.attributes.name;
            break;
        case 'brand':
            attributeValue = product.attributes.brand?.name;
            break;
        case 'product_id':
            attributeValue = product.attributes.identification?.productId;
            break;
    }

    return (
        <>
            {attributeValue}
        </>
    );
};

export default ProductAttribute;