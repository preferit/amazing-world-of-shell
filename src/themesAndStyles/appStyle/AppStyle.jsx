import { createGlobalStyle } from 'styled-components';
import img from '../../assets/images/octopus.png'

export const AppStyle = createGlobalStyle`

    html, body {
        margin: 0;
        padding: 0;
        background: rgb(255,20,147);
        background: radial-gradient(circle, rgba(255,20,147,1) 0%, rgba(255,182,193,1) 35%, rgba(255,105,180,1) 100%); 
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        /*background-image: url(${img});*/
        color: #EFFFFA;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
        color: ${({ theme }) => theme.primaryLight};
        /* Full height */
        height: 100%;
        width: 100%;
       /* background: rgb(2,0,36);
        background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,182,193,1) 35%, rgba(0,212,255,1) 100%); */
        /* Center and scale the image nicely :) */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, h3 {
        color: ${({ theme }) => theme.primaryDark};
        text-align: center;
        background:${({ theme }) => theme.primaryLight};
        margin-top: 2rem;
        display:inline-block; 
    }

    div {
        background: ${({ theme }) => theme.primaryLight};
        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }
    small {
        display: block;
    }

    a {
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        display:table;
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
    .pinky {
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
    p {
        color: ${({ theme }) => theme.primaryDark};
        background:${({ theme }) => theme.primaryLight};
        display:table;
    }
    li {
        color: ${({ theme }) => theme.primaryDark};
        background: ${({ theme }) => theme.primaryLight};
        display:table;
    }

`
