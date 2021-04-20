import React from 'react';
import { NextPage } from 'next';
import { CmsContent } from '../../../lib/cms/CmsContent';
import { Layout, Section } from '../../../components/ui';
import { fetchContent } from '../../../lib';
import { getProduct, Product } from '../../../lib';
import { Grid, Typography } from '@material-ui/core';
import { ProductHeader, ProductImage, WithProduct } from '../../../components/commerce';
import { CreditOffer, getOffers } from '../../../lib/commerce/getOffers';
import WithCreditOffer from '../../../components/offers/WithOffer';
import OfferCard from '../../../components/commerce/OfferCard/OfferCard';

interface Props {
    navigation: CmsContent,
    product: Product,
    offers: CreditOffer[],
    offersContent: CmsContent[]
}

const PDP: NextPage<Props> = (props: Props) => {
  const {
    offers,
    offersContent
  } = props;

  return (
    <WithProduct product={props.product}>
      <>
      <Section>
        <Grid container justify="center">
          <ProductImage />
          <ProductHeader />
          {
            offers.map(offer => {
              const offerContent = offersContent.find(x => x._meta?.deliveryKey === offer.id);
              if (!offerContent) {
                return <></>;
              }

              return <OfferCard offer={offer} offerContent={offerContent} />;
            })
          }
        </Grid>
      </Section>
      </>
    </WithProduct>
  );
}

PDP['Layout'] = Layout;

PDP.getInitialProps = async (context) => {
  const [
    navigation
  ] = await fetchContent([
    { key: 'slots/navigation' }
  ]);

  const product = await getProduct(context.query.sku as string);
  const offers = await getOffers(context.query.sku as string);
  const offersContent = await fetchContent(offers.map(offer => ({ key: `${offer.id}` })));

  return {
    navigation,
    product,
    offers,
    offersContent
  };
};

export default PDP;