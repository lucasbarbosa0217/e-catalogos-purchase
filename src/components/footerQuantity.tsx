import React from 'react';
import type Product from '../models/Product';

import { FaMinus, FaPlus } from 'react-icons/fa';
import Icon from './elements/icon';

import Wrapper from './elements/wrapper';
import FooterContainerQuantity from './elements/footerContainerQuantity';
import { CirclePrimary } from './elements/circle';
import Quantity from './elements/quantity';
import PriceCaption from './elements/priceCaption';

interface FooterProps {
    produto: Product; 
}



const FooterQuantity: React.FC<FooterProps> = ({ produto }) => {
    return (
        <FooterContainerQuantity>
            <Wrapper >

                <PriceCaption>
                    <p style={{fontWeight: "bold"}}>Atual</p>
                    <p>R$12000</p>

                </PriceCaption>
<CirclePrimary>
    <Icon>
        <FaMinus/>
</Icon>
</CirclePrimary>
        <Quantity>
            1
        </Quantity>

                <CirclePrimary>
                    <Icon>
                        <FaPlus />
                    </Icon>
                </CirclePrimary>

                <PriceCaption>
                    <p style={{ fontWeight: "bold" }}>Acumulado</p>
                    <p>R$12000</p>

                </PriceCaption>
            </Wrapper>

        </FooterContainerQuantity>
    );
};

export default FooterQuantity;