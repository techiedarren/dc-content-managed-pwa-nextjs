import React from 'react';
import { NextPage } from 'next';
import { CmsContent } from '../../../lib/cms/CmsContent';
import { Layout, Section } from '../../../components/ui';
import { fetchContent } from '../../../lib';
import { getProduct, Product } from '../../../lib';
import { WithProduct } from '../../../components/commerce';
import { CmsComponent } from '../../../components';
import { useContent } from '../../../components/cms-admin/WithVisualization/WithVisualization';

interface Props {
    navigation: CmsContent,
    layout: CmsContent,
    product: Product
}

const PDP: NextPage<Props> = (props: Props) => {
  const [layout] = useContent(props.layout);

  return (
    <WithProduct product={props.product}>
      { ((layout.slots || {}).main || []).map(component => <CmsComponent data={component} />) }
    </WithProduct>
  );
}

PDP['Layout'] = Layout;

PDP.getInitialProps = async (context) => {
  const [
    navigation,
    layout
  ] = await fetchContent([
    { key: 'slots/navigation' },
    { id: '03ca3a6e-3901-49b2-a38a-c431b119fc07' }
  ]);

  const product = await getProduct(context.query.sku as string);

  return {
    navigation,
    layout,
    product
  };
};

export default PDP;