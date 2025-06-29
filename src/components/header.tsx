import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import Icon from './elements/icon';
import Circle from './elements/circle';

const HeaderContainer = styled.header`
    background: #809caa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
const Category = styled.div`
    background: #fff;
    color: #809caa;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1rem;
`;


const Header: React.FC = () => (
    <HeaderContainer>
     
        <Icon>
            <FaArrowLeft />
        </Icon>
        <Category>Category</Category>
        <Circle>F</Circle>
    </HeaderContainer>
);

export default Header;