import React, { useState } from 'react';
import type Product from '../models/Product';
import Wrapper from './elements/wrapper';
import { CirclePrimary } from './elements/circle';
import { FaInfoCircle, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FlexRow } from './elements/flexRow';
import FooterContainerQuantity from './elements/footerContainerQuantity';
import ImageSquare from './elements/imageSquare';
import { useProductContext } from '../contexts/ProductContext';
import { InfoModal } from './InfoModal';
import { RefSearchModal } from './RefSearchModal';

interface ImageAndFunctionsProps {
    produto: Product;
}

const ImageAndFunctions: React.FC<ImageAndFunctionsProps> = ({ produto }) => {
    const { setImageIndexForProduct } = useProductContext();
    const [modalAberto, setModalAberto] = useState(false);

    const [refAberto, setRefAberto] = useState(false);

    return (
        <FooterContainerQuantity>
            <Wrapper>
                <FlexRow>
                    <CirclePrimary onClick={() => setModalAberto(true)}>
                        <FaInfoCircle />
                    </CirclePrimary>
                    <CirclePrimary onClick={() => setRefAberto(true)}>
                        <FaSearch />
                    </CirclePrimary>
                </FlexRow>
                <FlexRow>
                    {produto.images.map((image, index) => (
                        <ImageSquare
                            key={image.id}
                            src={image.path}
                            alt={produto.name}
                            onClick={() => setImageIndexForProduct(produto.id, index)}
                        />
                    ))}
                </FlexRow>
                <CirclePrimary>
                    <FaShoppingCart />
                </CirclePrimary>
            </Wrapper>
            <InfoModal isOpen={modalAberto} onClose={() => setModalAberto(false)} product={produto} />
            <RefSearchModal isOpen={refAberto} onClose={() => setRefAberto(false)} />

        </FooterContainerQuantity>
    );
};

export default ImageAndFunctions;
