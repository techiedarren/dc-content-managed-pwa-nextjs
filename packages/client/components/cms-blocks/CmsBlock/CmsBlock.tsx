import React, { FC } from 'react'
import { CmsContent } from '../../../lib/cms/CmsContent';
import { useContent } from '../../cms-admin/WithVisualization/WithVisualization';
import EditorialBlock from '../EditorialBlock';
import GalleryBlock from '../GalleryBlock';
import HeroBannerBlock from '../HeroBannerBlock';

interface Props {
    content?: CmsContent;
}

const mapping: any = {
    'EditorialBlock': EditorialBlock,
    'GalleryBlock': GalleryBlock,
    'HeroBannerBlock': HeroBannerBlock
};

const CmsBlock: FC<Props> = ({content}) => {
    if (!content) {
        return <></>;
    }
    
    const Component = mapping[content.component] || mapping[content._meta?.schema];
    if (!Component) {
        return <></>;
    }

    const [_content] = useContent(content);
    return <Component {..._content} />;
}

export default CmsBlock;