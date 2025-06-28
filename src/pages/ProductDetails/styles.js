import styled, { keyframes } from 'styled-components';

const growAnimation = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
`

const boxShadowAnimation = keyframes`
    0%, 100% {
        box-shadow: none;
    }
    50% {
        box-shadow: 0px 0px 10px 5px rgba(255,167,38,0.75);
    }
`

export const Container = styled.div`
    background-color: #F5EEDD;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    flex: 1;

    @media (max-width: 868px) {
       display: flex;
       flex-direction: column;
    }
`

export const ProductInfoWrapper = styled.div`
    background-color: #EFE4D2;
    padding: 5rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 868px) {
       padding-bottom: 1.2rem;
    }

    @media (width: 1024px) {
       padding: 6.5rem 0 1.5rem;
    }
`

export const ProductName = styled.h1`
    font-size: 2rem;
    color: #FFA726;
    font-weight: 800;

     @media (max-width: 868px) {
       padding-top: 1.5rem;
    }
`

export const ProductImage = styled.img`
    height: 280px;
    width: 300px;
    border-radius: 10px;

    @media (max-width: 868px) {
       height: 250px;
       width: 270px;
    }
`

export const ProductDescription = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 0 0.5rem 0;
`

export const ProductPrice = styled.p`
    font-size: 25px;
    color: #4E342E;
    font-weight: bold;
    animation: ${growAnimation} 2s ease infinite;
`

export const ChoosePrintWrapper = styled.div`
    padding: 3rem 2.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

    @media (max-width: 868px) {
       padding-bottom: 1.2rem;
    }
`

export const OptionsPrintImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s ease;
    }

    &:active {
       transform: scale(0.9);
    }

    @media (max-width: 868px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: 1024px) {
       &:hover , &:active {
        transition: none;
        transform: none;
       }
    }
`

export const ChoosePrintContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: center;
    padding: 1.7rem;
    background-color: #EFE4D2;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(255,167,38,0.75);

    @media (max-width: 1068px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`

export const Subtitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    color: #4E342E;
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #FFA726;
    color: #4E342E;
    font-weight: bold;
    font-size: 16px;
    animation: ${boxShadowAnimation} 1s ease-in-out infinite;
    
    &:hover {
        background-color: #4E342E;
        color: #FFA726;
        transition:  0.3s ease;
    }

    &:active {
        opacity: 0.7;
    }

    @media (max-width: 1024px) {

        &:hover {
            background-color: #FFA726;
            color: #4E342E;
            transition: none;
        }

        &:active {
            opacity: 1;
            transition: none;
        }
    }
`

export const NoVariationText = styled.p`
    font-size: 3rem;
    text-align: center;
    color: #FF0000;
    font-weight: bold;
    animation: ${growAnimation} 1s ease infinite;

    @media (max-width: 460px) {
        font-size: 2rem;
    }
`