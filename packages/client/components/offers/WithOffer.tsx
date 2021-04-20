import { createContext, FC, PropsWithChildren, useContext } from "react";
import { CreditOffer } from "../../lib/commerce/getOffers";

type CreditOfferContextState = CreditOffer;

const CreditOfferContext = createContext<CreditOfferContextState | null>(null);

interface Props extends PropsWithChildren<any> {
    offer: CreditOffer;
}

export function useCreditOffer(): CreditOfferContextState | null {
    return useContext(CreditOfferContext);
}

const WithCreditOffer: FC<Props> = (props: Props) => {
    return <CreditOfferContext.Provider value={props.product}>
        {props.children}
    </CreditOfferContext.Provider>
};

export default WithCreditOffer;
