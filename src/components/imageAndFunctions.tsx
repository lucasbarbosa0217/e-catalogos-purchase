import React from 'react';
import type Product from '../models/Product';
import Wrapper from './elements/wrapper';
import { CirclePrimary } from './elements/circle';
import { FaInfoCircle, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FlexRow } from './elements/flexRow';
import FooterContainerQuantity from './elements/footerContainerQuantity';
import ImageSquare from './elements/imageSquare';
import { useProductContext } from '../contexts/ProductContext';

interface ImageAndFunctionsProps {
    produto: Product;
}

const ImageAndFunctions: React.FC<ImageAndFunctionsProps> = ({ produto }) => {
    
    const { setImageIndexForProduct } = useProductContext();

    return (
        <FooterContainerQuantity>
            <Wrapper>
                <FlexRow>
                    <CirclePrimary>
                        <FaInfoCircle></FaInfoCircle>
                    </CirclePrimary>
                    <CirclePrimary>
                        <FaSearch></FaSearch>
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
                    <FaShoppingCart></FaShoppingCart>
                </CirclePrimary>
            </Wrapper>
        </FooterContainerQuantity>
      
    );
};

export default ImageAndFunctions;