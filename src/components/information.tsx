import React from 'react';
import type Product from '../models/Product';
import Wrapper from './elements/wrapper';
import { Caption } from './elements/caption';
import { FlexRow } from './elements/flexRow';


type InformationProps = {
    product: Product;
};

const Information: React.FC<InformationProps> = ({ product }) => (
    <Wrapper>
        <p>{product.name.split(" ")[0]}</p>
        <FlexRow>
            <Caption>REF:</Caption>
            <p>{product.reference}</p>
        </FlexRow>
        <FlexRow>
            <Caption>R$:</Caption>
            <p>{product.skus[0].price}</p>
        </FlexRow>
    </Wrapper>
);

export default Information;