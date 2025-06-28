import styled from 'styled-components';

export const Container = styled.div`
    background: #F5EEDD;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width:612px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`

export const PhrasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;

    span {
        color: #FFA726;
    }

    @media (max-width: 612px) {
        font-size: 1.5rem;
    }
`

export const Subtitle = styled.h2`
    font-size: 1rem;
    text-align: center;
`

export const ImagesContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    position: relative;

   img {
    height: 200px;
    border-radius: 100%;
    transform-origin: center center;
   }
`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;

    div {
    border: solid #FFA726;
    min-width: 50%;
    padding: 10px;
    border-radius: 10px;
    background-color: #F5F5F5;
    box-shadow: 0px 0px 10px 5px #FFA726;
    }

    ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 30px;
    }

`