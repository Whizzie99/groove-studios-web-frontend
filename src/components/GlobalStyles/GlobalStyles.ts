'use client';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --white: #fff;
    --black: #000;
    --pink: #D8A3A3;
    --gray-1: #e5e5e5;
  }


  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`