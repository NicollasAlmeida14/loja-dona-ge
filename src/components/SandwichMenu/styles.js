import styled from "styled-components";

export const SandwichContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: relative;
    }
`

export const SandwichIcon = styled.button`
    font-size: 2rem;
    color: #4E342E;
    display: flex;
    background: none;
    border: none;
`

export const Menu = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    flex-direction: column;
    gap: 1rem;
    z-index: 10;
`

export const MenuItem = styled.p`
    margin: 0;
    cursor: pointer;
    font-weight: bold;
    color: #333;
`
