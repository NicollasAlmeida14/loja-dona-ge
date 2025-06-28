import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #A4907C;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    padding: 15px;
    justify-items: center;
    color: white;

    p {
        font-weight: 500;
        border-right: solid 1px #fff;
        padding-right: 20px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    li {
        list-style: none;
    }



    button {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #fff;

        &:hover {
            color: #FFA726;
            transition: all 0.3s ease;
        }

        &:active {
            opacity: 0.6;
        }

        @media ( max-width: 1024px) {
            &:hover {
                color: #fff;
                transition: none;
            }

            &:active {
                opacity: 1;
            }
        }
    }

    @media (max-width:645px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`