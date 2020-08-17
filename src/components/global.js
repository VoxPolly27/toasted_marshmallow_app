import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.inverse};
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
 
 
    .tm-primary {
        color: ${({ theme }) => theme.primary};
    }

    .tm-inverse {
        color: ${({ theme }) => theme.inverse};
    }

    .tm-bg-primary {
        background: ${({ theme }) => theme.primary};
    }

    .tm-bg-inverse {
        background: ${({ theme }) => theme.inverse};
    }

    
    .tm-red {
        color: ${({ theme }) => theme.tm_red};
    }

    .tm-red-hover:hover {
        color: ${({ theme }) => theme.tm_red};
    }

    .tm-bg-red {
        background: ${({ theme }) => theme.tm_red};
    }

    .tm-bg-red-hover:hover {
        background: ${({ theme }) => theme.tm_red};
    }
  
    .tm-red-2 {
        color: ${({ theme }) => theme.tm_red_2};
    }

    .tm-bg-red-2 {
        background: ${({ theme }) => theme.tm_red_2};
    }

    .tm-red-3 {
        color: ${({ theme }) => theme.tm_red_3};
    }

    .tm-red-3 {
        background: ${({ theme }) => theme.tm_red_3};
    }

    .tm-dark {
        color: ${({ theme }) => theme.tm_dark};
    }

    .tm-bg-dark {
        background: ${({ theme }) => theme.tm_dark};
    }

    .tm-dark-up {
        color: ${({ theme }) => theme.tm_dark_up};
    }

    .tm-bg-dark-up {
        background: ${({ theme }) => theme.tm_dark_up};
    }

    .tm-grey {
        color: ${({ theme }) => theme.tm_grey};
    }

    .tm-bg-grey {
        background: ${({ theme }) => theme.tm_grey};
    }
    
    .tm-light {
        color: ${({ theme }) => theme.tm_light};
    }

    .tm-bg-light {
        background: ${({ theme }) => theme.tm_light};
    }

    .tm-mallow-1 {
        color: ${({ theme }) => theme.tm_mallow_1};
    }

    .tm-bg-mallow-1 {
        background: ${({ theme }) => theme.tm_mallow_1};
    }

    .tm-mallow-2 {
        color: ${({ theme }) => theme.tm_mallow_2};
    }

    .tm-bg-mallow-2 {
        background: ${({ theme }) => theme.tm_mallow_2};
    }

    .tm-mallow-3 {
        color: ${({ theme }) => theme.tm_mallow_3};
    }

    .tm-bg-mallow-3 {
        background: ${({ theme }) => theme.tm_mallow_3};
    }

    .tm-pink{
        color: ${({ theme }) => theme.tm_pink};
    }

    .tm-bg-pink{
        background: ${({ theme }) => theme.tm_pink};
    }

    .tm-error{
        color: ${({ theme }) => theme.tm_error};
    }

    .tm-bg-error{
        background: ${({ theme }) => theme.tm_error};
    }

    .svg-stroke-primary{
        stroke : ${({ theme }) => theme.primary}
    }

    .svg-fill-primary{
        fill : ${({ theme }) => theme.primary}
    }

    .svg-stroke-inverse{
        stroke : ${({ theme }) => theme.inverse}

    }

    .svg-fill-inverse{
        fill : ${({ theme }) => theme.inverse}
    }

    .svg-stroke-red{
        stroke : ${({ theme }) => theme.tm_red}

    }

    .svg-fill-red{
        fill : ${({ theme }) => theme.tm_red}

    }

    .svg-stroke-light{
        stroke : ${({ theme }) => theme.tm_light}
    }

    .svg-fill-light{
        fill : ${({ theme }) => theme.tm_light}
    }

    .svg-stroke-dark{
        stroke : ${({ theme }) => theme.tm_dark}
    }

    .svg-fill-dark{
        fill : ${({ theme }) => theme.tm_dark}
    }

    .tm-border-red{
        border-color: ${({ theme }) => theme.tm_red}
    }   

    .tm-border-light{
        border-color: ${({ theme }) => theme.tm_light}

    }   

    .tm-border-dark{
        border-color: ${({ theme }) => theme.tm_dark}

    }   

    .tm-border-primary{ 
        border-color: ${({ theme }) => theme.primary}

    }   

    .tm-border-inverse{ 
        border-color: ${({ theme }) => theme.inverse}

    }  
    

`


