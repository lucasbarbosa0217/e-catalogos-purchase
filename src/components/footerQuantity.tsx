import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import Icon from './elements/icon';
import Wrapper from './elements/wrapper';
import FooterContainerQuantity from './elements/footerContainerQuantity';
import { CirclePrimary } from './elements/circle';
import Quantity from './elements/quantity';
import PriceCaption from './elements/priceCaption';

import { useProductContext } from '../contexts/ProductContext';

const FooterQuantity: React.FC = () => {
    const {
        selectedProduct,
        quantities,
        increaseQuantity,
        decreaseQuantity,
        products,
    } = useProductContext();

    if (!selectedProduct) return null;

    const quantity = quantities[selectedProduct.id] || 0;
    const price = Number(selectedProduct.skus[0]?.price) || 0;

    const formatted = (value: number) =>
        value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });

    const totalAtual = quantity * price;

    const totalAcumulado = products.reduce((acc, prod) => {
        const q = quantities[prod.id] || 0;
        const p = Number(prod.skus[0]?.price) || 0;
        return acc + q * p;
    }, 0);

    return (
        <FooterContainerQuantity>
            <Wrapper>
                <PriceCaption>
                    <p style={{ fontWeight: 'bold' }}>Atual</p>
                    <p>{formatted(totalAtual)}</p>
                </PriceCaption>

                <CirclePrimary onClick={() => decreaseQuantity(selectedProduct.id)}>
                    <Icon>
                        <FaMinus />
                    </Icon>
                </CirclePrimary>

                <Quantity>{quantity}</Quantity>

                <CirclePrimary onClick={() => increaseQuantity(selectedProduct.id)}>
                    <Icon>
                        <FaPlus />
                    </Icon>
                </CirclePrimary>

                <PriceCaption>
                    <p style={{ fontWeight: 'bold' }}>Acumulado</p>
                    <p>{formatted(totalAcumulado)}</p>
                </PriceCaption>
            </Wrapper>
        </FooterContainerQuantity>
    );
};

export default FooterQuantity;
