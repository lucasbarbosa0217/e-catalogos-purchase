import React from 'react';
import type Product from '../models/Product';
import type Sku from '../models/Sku';
import SizeCircle from './elements/sizeCircle';
import SizeQuantity from './elements/sizeQuantity';
import styled from 'styled-components';
import { FaEquals } from 'react-icons/fa';
import Icon from './elements/icon';
import Wrapper from './elements/wrapper';
import FooterContainer from './elements/footerContainer';
import PackText from './elements/packText';

interface FooterProps {
    produto: Product; 
}

const Footer: React.FC<FooterProps> = ({ produto }) => {
    return (
        <FooterContainer>
            <Wrapper >

            {Array.isArray(produto.skus) ? (
                produto.skus.map((skuItem: Sku, idx: number) => (
                     
                    <SizeQuantity key={skuItem.id}>{skuItem.minQuantity}

                            <SizeCircle>{skuItem.size}</SizeCircle>
                        </SizeQuantity>
                ))

            ) : (
                <span>Sem SKUs disponíveis</span>
            )}


        <Icon>
                    <FaEquals></FaEquals>
        </Icon>

        <SizeQuantity>
            {Array.isArray(produto.skus)
                ? produto.skus.reduce((acc, sku) => acc + (sku.minQuantity || 0), 0)
                : 0}

                <PackText>PACK</PackText>
        </SizeQuantity>
           
            </Wrapper>

        </FooterContainer>
    );
};

export default Footer;