import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { CmsContent } from '../../../lib';
import { CreditOffer } from '../../../lib/commerce/getOffers';

const styles = theme => ({
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
    offer: CreditOffer;
    offerContent: CmsContent;
}

function replaceOfferVariables(text: string, offer: CreditOffer): string {
    for (let variableName of Object.keys(offer.variables)) {
        text  = text.replace(`{${variableName}}`, offer.variables[variableName])
    }
    return text;
}

const OfferCard: React.SFC<Props> = (props) => {
    const {
        classes,
        offer,
        offerContent,
        ...other
    } = props;

    return (
        <div>
            <h1>{replaceOfferVariables(offerContent.title, offer)}</h1>
            <p>
                {replaceOfferVariables(offerContent.description, offer)}
            </p>
        </div>
    );
};

export default withStyles(styles)(OfferCard);