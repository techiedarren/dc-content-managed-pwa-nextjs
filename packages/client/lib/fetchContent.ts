import fetch from 'isomorphic-unfetch';
import { CmsContext } from './CmsContext';
import { CmsContent } from './CmsContent';
import DataLoader from 'dataloader';

export type CmsRequest = { id: string } | { key: string };

async function fetchContent(items: CmsRequest[], context?: CmsContext): Promise<(CmsContent | null)[]> {
    const host = context?.stagingApi || process.env.contentApi;

    const resolveContent = (requests: CmsRequest[]): Promise<CmsContent[]> => {
        return fetch(
            `https://${host}/content/fetch`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "parameters": {
                            "depth": "all",
                            "format": "inlined"
                        },
                        "requests": requests
                    })
                }
            ).then(x => x.json())
                .then(x => x.responses)
                .then(x => x.map((y: any) => y.content || null));
    };

    const bulkContentLoader = new DataLoader<CmsRequest, CmsContent>(resolveContent as any, {
        maxBatchSize: 10
    });
    
    const fetchedContent: CmsContent[] = await Promise.all(
        items.map((item: any) => {
            return bulkContentLoader.load(item);
        })
    );
    
    return fetchedContent;
}

export default fetchContent;