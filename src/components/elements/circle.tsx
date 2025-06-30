import styled from "styled-components";


const Circle = styled.div`
    background: var(--background-color);
    color: var(--primary-color);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;


export const CirclePrimary = styled(Circle)`
    background: var(--primary-color);
    color: var(--background-color);
   

`;

export default Circle;