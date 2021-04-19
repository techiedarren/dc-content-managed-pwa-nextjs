import fetch from 'isomorphic-unfetch';
import { CmsContext } from './CmsContext';
import { CmsContent } from './CmsContent';
import DataLoader from 'dataloader';
import LRU from 'lru-cache';

const cache = new LRU({
    max: 500,
    maxAge: 1000 * 60 * 60
});

export type GetRequestOptions = {
    cache?: {
        ttl?: number;
    }
    // follow?: FollowContentRequest[];
}
// export type FollowContentRequest = { path: string } & CmsFetchContentOptions;
export type GetByIdRequest = { id: string } & GetRequestOptions;
export type GetByKeyRequest = { key: string } & GetRequestOptions;

export type CmsRequest = GetByIdRequest | GetByKeyRequest;
export type CmsCacheKey = string;

function isGetByIdRequest(request: CmsRequest): request is GetByIdRequest {
    return request['id'] !== undefined;
}

function isGetByKeyRequest(request: CmsRequest): request is GetByIdRequest {
    return request['key'] !== undefined;
}

function getCacheKey(request: CmsRequest): CmsCacheKey | undefined {
    if (isGetByIdRequest(request)) {
        return ['id', request.id].join('/');
    } else if (isGetByKeyRequest(request)) {
        return ['key', request.key].join('/');
    } else {
        return undefined;
    }
}

function extractRequest(request: CmsRequest): { id: string } | { key: string } {
    if (isGetByIdRequest(request)) {
        return { id: request.id };
    } else if (isGetByKeyRequest(request)) {
        return { key: request.key };
    } else {
        return undefined;
    }
}

async function fetchContent(items: CmsRequest[], context?: CmsContext): Promise<(CmsContent | null)[]> {
    const host = context?.stagingApi || process.env.contentApi;
    const sessionCache: { [cacheKey: string]: Promise<CmsContent | null> } = {};
    
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

    const fetchSingleItem = async (request: CmsRequest): Promise<(CmsContent | null)> => {
        const cacheKey = getCacheKey(request);
        const shouldCache = request.cache && request.cache.ttl > 0;

        if (sessionCache[cacheKey]) {
            return sessionCache[cacheKey];
        } else {
            return sessionCache[cacheKey] = (async() => {
                if (shouldCache) {
                    const cachedValue = cache.get(cacheKey);
                    if (cachedValue !== undefined) {
                        return cachedValue;
                    }
                }
                const result = await bulkContentLoader.load(extractRequest(request));
                if (shouldCache) {
                    cache.set(cacheKey, result, request.cache.ttl);
                }
                return result;
            })();
        }
    }

    const fetchSingleRequest = async (request: CmsRequest): Promise<(CmsContent | null)> => {
        let content: CmsContent | null = await fetchSingleItem(request);
        //TODO: follow
        return content;
    }
    
    const fetchedContent: CmsContent[] = await Promise.all(
        items.map((item: CmsRequest) => {
            return fetchSingleRequest(item);
        })
    );
    
    return fetchedContent;
}

export default fetchContent;