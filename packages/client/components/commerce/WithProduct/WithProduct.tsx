import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Product } from "../../../lib";

type ProductContextState = Product;

const ProductContext = createContext<ProductContextState | null>(null);

interface Props extends PropsWithChildren<any> {
    product: Product;
}

export function useProduct(): ProductContextState | null {
    return useContext(ProductContext);
}

const WithProduct: FC<Props> = (props: Props) => {
    return <ProductContext.Provider value={props.product}>
        {props.children}
    </ProductContext.Provider>
};

export default WithProduct;
