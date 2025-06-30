import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Icon from './elements/icon';
import Circle from './elements/circle';
import IconPrimary from './elements/iconPrimary';
import { useProductContext } from '../contexts/ProductContext';

const HeaderContainer = styled.header`
    background: #809caa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`;
const Category = styled.div`
    background: #fff;
    color: #809caa;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1rem;
`;
const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const Header: React.FC = () => {
    const {
        products,
        selectedProduct,
        selectProduct,
        changingCategoryManually,
        setChangingCategoryManually,
    } = useProductContext();

    const [categories, setCategories] = useState<string[]>([]);
    const [categoryIndex, setCategoryIndex] = useState(0);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(products.map(p => p.categories)));
        setCategories(uniqueCategories);
    }, [products]);

    useEffect(() => {
        if (!selectedProduct || categories.length === 0) return;

        const idx = categories.findIndex(c => c === selectedProduct.categories);
        if (idx !== -1) setCategoryIndex(idx);
    }, [selectedProduct, categories]);

    useEffect(() => {
        if (!changingCategoryManually) return;
        if (categories.length === 0) return;

        const currentCategory = categories[categoryIndex];
        const firstProduct = products.find(p => p.categories === currentCategory);
        if (firstProduct) selectProduct(firstProduct);

        if (setChangingCategoryManually) setChangingCategoryManually(false);
    }, [categoryIndex, categories, products, selectProduct, changingCategoryManually, setChangingCategoryManually]);

    const changeCategory = (newIndex: number) => {
        if (setChangingCategoryManually) setChangingCategoryManually(true);
        setCategoryIndex(newIndex);
    };

    const goToPreviousCategory = () => {
        changeCategory(categoryIndex === 0 ? categories.length - 1 : categoryIndex - 1);
    };

    const goToNextCategory = () => {
        changeCategory(categoryIndex === categories.length - 1 ? 0 : categoryIndex + 1);
    };

    return (
        <HeaderContainer>
            <Icon>
                <FaArrowLeft />
            </Icon>

            <CategoryWrapper>
                <Circle onClick={goToPreviousCategory}>
                    <IconPrimary>
                        <FaArrowLeft />
                    </IconPrimary>
                </Circle>

                <Category>{categories[categoryIndex] ?? "Carregando..."}</Category>

                <Circle onClick={goToNextCategory}>
                    <IconPrimary>
                        <FaArrowRight />
                    </IconPrimary>
                </Circle>
            </CategoryWrapper>

            <Circle>F</Circle>
        </HeaderContainer>
    );
};

export default Header;
