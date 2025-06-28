import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

  .swiper-button-next,
  .swiper-button-prev {
    color: #FFA726;
    transition: all 0.3s ease;

    &:hover{
      scale: 1.2;
    }

    &:active {
      scale: 1;
    }

    @media (max-width:1024px) {
      &:hover {
        scale: 1;
      }
    }
  }
`