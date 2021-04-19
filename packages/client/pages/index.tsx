import React from 'react';
import { NextPage } from 'next';
import { CmsContent } from '../lib/CmsContent';
import fetchContent from '../lib/fetchContent';
import { Layout } from '../components/ui';
import { CmsBlock } from '../components/cms-blocks';

interface Props {
    navigation: CmsContent,
    slot: CmsContent
}

const defaultSlotContents = [
  {
      description: 'No Page Slot with content for delivery key "slots/homepage-hero"',
      component: 'EditorialBlock',
      title: 'Error loading content'
  }
];

const Index: NextPage<Props> = (props: Props) => {
  const slotComponents = props.slot?.components || defaultSlotContents;

  return (
    <>
    {
      slotComponents.map(content => <CmsBlock content={content} />)
    }
    </>
  );
}

Index['Layout'] = Layout;

Index.getInitialProps = async (context) => {
  const [
    navigation,
    slot
  ] = await fetchContent([
    { key: 'slots/navigation' },
    { key: 'slots/homepage-hero' }
  ]);

  return {
    navigation,
    slot
  };
};

export default Index;