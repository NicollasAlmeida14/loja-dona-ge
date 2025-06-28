import styled from "styled-components";

export const Header = styled.header`
    background: #FFE0B2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    img {
        width: 100px;

        @media(max-width: 768px) {
            width: 70px;
        }
    }
`

export const Ul = styled.ul`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.li`
    list-style: none;
`

export const Link = styled.p`
    cursor: pointer;
    position: relative;
    font-size: 18px;
    font-weight: bold;
    color: #4E342E;

    &::after {
        content: '';
        width: 0;
        background: #FFA726;
        height: 3px;
        bottom: 0;
        left: 0;
        position: absolute;
        transition: width 0.5s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Button = styled.button`
    font-size: 2.2rem;
    color: #FFA726;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    
    span {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 10px;
        background-color: #4E342E;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1);
    }

        @media (max-width: 768px) {
        display: none;
    }
` 