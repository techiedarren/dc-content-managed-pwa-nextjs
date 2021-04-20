export type CreditOffer = {
    id: string;
    variables: { [key: string]: any },
    type: 'discount'
}

export async function getOffers(sku: string): Promise<CreditOffer[]> {
    return [
        {
            id: 'offer1',
            variables: {
                code: 'R39F6',
                discount: '20%'
            },
            type: 'discount'
        }
    ];
}
