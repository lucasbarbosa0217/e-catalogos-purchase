import styled from "styled-components";


const SizeCircle = styled.div`
    background: var(--primary-color);
    color: var(--background-color);
    width: 1.6rem;
    height: 1.6rem;
    font-size: 0.9rem;
    border: 1px solid var(--background-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position:absolute;
    top: -1rem;
    right: -0.8rem;
`;


export default SizeCircle;