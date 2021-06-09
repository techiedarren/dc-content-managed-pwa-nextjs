import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { init, DcVisualizationStatic } from 'dc-visualization-sdk';

type VisualizationConnectionStatus = 'connecting' | 'connected' | 'failed' | 'reloading';

type VisualizationContextState = {
    status: VisualizationConnectionStatus,
    sdk: DcVisualizationStatic;
    formModel: any;
};

const VisualizationContext = createContext<VisualizationContextState | null>(null);

interface Props extends PropsWithChildren<any> {
}

export const useVisualization = () => {
    return useContext(VisualizationContext);
};

const WithVisualization: React.SFC<Props> = (props) => {
    const [status, setStatus] = useState<VisualizationConnectionStatus>('failed');
    const [sdk, setSDK] = useState<DcVisualizationStatic>(null);
    const [formModel, setFormModel] = useState<any>(null);

    useEffect(() => {
        setStatus('connecting');

        let removeChangedSubscription = undefined;

        init({connectionTimeout: 30000}).then(async sdk => {
            const value = await sdk.form.get();
            
            removeChangedSubscription = sdk.form.changed((value) => {
                setFormModel(value.content);
            });

            setSDK(sdk);
            setFormModel(value.content);
            setStatus('connected');
        }).catch(() => {
            setStatus('failed');
        });

        return () => {
            if (removeChangedSubscription) {
                removeChangedSubscription();
            }
        }
    }, []);

    return <VisualizationContext.Provider value={{sdk, formModel, status}}>
        {props.children}
    </VisualizationContext.Provider>
};

export function useContent(content: any): [any, any | undefined] {
    const {
        formModel
    } = useVisualization();

    if (formModel && formModel._meta?.deliveryId === content?._meta?.deliveryId) {
        return [formModel, content];
    }
    return [content, undefined];
}

export default WithVisualization;