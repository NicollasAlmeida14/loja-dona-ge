import styled, { keyframes } from 'styled-components';

const growAnimation = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
`

export const Container = styled.div`
    background: #F5EEDD;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
export const CartContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 20%;
    align-items: center;
    flex: 1;
    padding: 5rem 1.5rem 0;
    gap: 20px;


    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-bottom: 1rem;
    }
`

export const ProductsCartWrapper = styled.div`
    background-color: #FFE0B2;
    height: 50vh;
    overflow: auto;
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ProductsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 10px;
    border-left: solid 1px ;

    @media (max-width: 768px) {
        border-left: none;
        border-top: solid 1px;
        padding: 10px 0 0 ;
    }
`

export const ProductsName = styled.h2`
    font-size: 1rem;
    color: rgb(0, 0, 0, 0.8);
    font-weight: 500;
`

export const ProductsPrice = styled.h2`
    font-size: 1.4rem;
`

export const ProductsCartInfos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 2.5rem;
    padding: 10px 0 10px 25px;
    position: relative;
    border: solid 2px #4E342E;
    background-color:#EFE4D2;
    border-radius: 10px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 10px 0;
    }
`

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 10px;
`

export const ProductsQuantityContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`

export const DecreaseButton = styled.button`
    font-size: 1.5rem;
    color: #FFA726;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: 1024px) {
        &:hover, &:active {
            opacity: 1;
        }
    }
`

export const IncreaseButton = styled.button`
    font-size: 1.5rem;
    color: #FFA726;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: 1024px) {
        &:hover, &:active {
            opacity: 1;
        }
    }
`

export const ProductsQuantity = styled.h3`
    font-size: 1.5rem;
`

export const DeleteProductButton = styled.button`
    position: absolute;
    right: 0;
    margin-right: 20px;
    cursor: pointer;
    color: #FFA726;
    font-size: 1.5rem;
    background: none;
    border: none;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: 1024px) {
        &:hover, &:active {
            opacity: 1;
        }
    }
`

export const ResumeCartWrapper = styled.div`
    background-color:#FFE0B2;
    height: 50vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h2 {
        padding: 0.5rem 0.5rem 0;
        font-size: 1.3rem;
        text-align: center;
    }
`

export const TotalPrice = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
`

export const TotalItems = styled.p`
    font-size: 1.1rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
`

export const FinalizePurchaseButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #FFA726;
    color: #4E342E;
    font-weight: bold;
    font-size: 18px;
    animation: ${growAnimation} 1.5s ease-in-out infinite;
    
    &:hover {
        background-color: #4E342E;
        color: #FFA726;
        transition: 0.3s ease;
    }

    &:active {
        opacity: 0.7;
    }

    @media (max-width: 985px) {
        animation: none;
    }

    @media (max-width: 1024px) {
        &:hover {
            background-color: #FFA726;
            color: #4E342E;
            transition: none;
        }

        &:active {
            opacity: 1;
        }
    }
`