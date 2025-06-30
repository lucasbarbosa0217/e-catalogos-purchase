import styled from 'styled-components';

const ImageSquare = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border: 3px solid var(--primary-color);
    border-radius: 0.5rem;
    display: block;
    cursor: pointer;
`;

export default ImageSquare;