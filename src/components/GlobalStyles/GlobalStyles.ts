"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --white: #fff;
    --black: #000;
    --pink: #D8A3A3;
    --gray-1: #e5e5e5;
    --gray-2: #F3F3F3;
    --gray-3: #E4DEDE;
  }


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-image: url('/images/patterned-bg.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* scroll-behavior: smooth; */
    /* background-color: var(--gray-1); */
  }
`;
