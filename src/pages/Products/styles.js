import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F5EEDD;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 120px;
`

export const SectionContainer = styled.div`
    padding: 3rem 2rem;
    margin-bottom: 1rem;
`

export const Title = styled.h2`
    font-size: 2rem;

    span{
        color: #FFA726;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
        text-align: center;
    }
`
export const CardWrapper = styled.div`
   padding: 30px 20px 20px;
   display: flex;
   justify-content: center;
`

export const ProductsCards = styled.div`
    background-color: #FFE0B2;
    display: grid;
    width: 260px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    border: solid 2px #FFA726;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0px 0px 10px 5px rgba(255,167,38,0.75);
    } 

    @media (max-width: 1024px) {
        &:hover {
            transform: none;
            box-shadow: none;
        }
    }
`

export const ProductImage = styled.img`
    height: 180px;
    width: 100%;
    object-fit: cover;
`

export const ProductName = styled.h3`
    font-size: 16px;
    padding-left: 0.5rem;
    color: #FFA726;
    font-weight: 800;
`

export const ProductDescription = styled.p`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 15px;
    font-weight: 500;
`

export const ProductPrice = styled.p`
    font-size: 20px;
    padding-left: 0.5rem;
    color: #4E342E;
    font-weight: bold;
`