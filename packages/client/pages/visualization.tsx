import React from 'react';
import { NextPage } from 'next';
import { CmsContent } from '../lib/cms/CmsContent';
import { fetchContent } from '../lib';
import { Layout } from '../components/ui';
import { CmsBlock } from '../components/cms-blocks';
import { useVisualization } from '../components/cms-admin/WithVisualization/WithVisualization';

interface Props {
    navigation: CmsContent,
    content: CmsContent
}

const defaultSlotContents = [
  {
      description: 'No Page Slot with content for delivery key "slots/homepage-hero"',
      component: 'EditorialBlock',
      title: 'Error loading content'
  }
];

const Visualization: NextPage<Props> = (props: Props) => {
  const {
    formModel
  } = useVisualization();

  return (
    <CmsBlock content={formModel || props.content} />
  );
}

Visualization['Layout'] = Layout;

Visualization.getInitialProps = async (context) => {
  const [
    navigation,
    content
  ] = await fetchContent([
    { key: 'slots/navigation' },
    { id: context.query.id as string }
  ], {
      stagingApi: context.query.contentApi as string
  });

  return {
    navigation,
    content
  };
};

export default Visualization;