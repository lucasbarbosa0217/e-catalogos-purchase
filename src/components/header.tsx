import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Icon from './elements/icon';
import Circle from './elements/circle';
import IconPrimary from './elements/iconPrimary';

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



const Header: React.FC = () => (
    <HeaderContainer>

        <Icon>
            <FaArrowLeft />
        </Icon>


        <CategoryWrapper>

            <Circle><IconPrimary>
                <FaArrowLeft />
            </IconPrimary></Circle>
            
            <Category>Category</Category>

<Circle>
                <IconPrimary>
                    <FaArrowRight />
                </IconPrimary>
</Circle>
         
        </CategoryWrapper>

        <Circle>F</Circle>
    </HeaderContainer>
);

export default Header;