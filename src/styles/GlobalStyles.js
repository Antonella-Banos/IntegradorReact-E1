import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --navbar-bg: #7ca1d5;
        --pale-pink: #ffdcdb;
        --pink: #ef94bd;
        --blue: #7e9dd4;
        --pale-blue: #b4c8ea;
        --pale-pink-secondary: #f7cac9;
        --blue-secondary: #92a8d1;
        --text-color: #333;
        --text-color-secondary: #444;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #fff;
        overflow-x: hidden;
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
`;