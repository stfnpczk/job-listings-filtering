'use client';
import { createGlobalStyle } from 'styled-components';

export const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1280px',
  extraWide: '2000px',
};

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
  box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  
  html {

    --cyan: #5CA5A5;
    --darkCyan: #5ba4a4;
    --lightCyanBg: #effafa;
    --lightCyanFilter: #eef6f6;
    --grayishCyan: 	#7b8e8e;
    --darkGrayishCyan: #2c3a3a;
    --white: #ffffff;
    --black: #2b3839;
    --gray: #b7c4c4;
    --darkGray: #7c8f8f;
  }

  body {
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    font-size: 0.9375rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: 0.9375rem;
    background-color: var(--lightCyanBg);
    }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button { 
    border: 0;
    background: none;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: var(--black);
  }

  main {
    position: relative; 
    max-width: 50rem;
    margin: 0 auto;
    width: 100%;
    padding: 1.5rem;
    
    @media (min-width: ${sizes.desktop}) {
      max-width: 81.25rem;
      padding: 3.75rem;
    }
  }

  p,
  a {
      font-weight: 500;
      text-decoration: none;

      @media (min-width: ${sizes.desktop}) {
        font-size: 1rem;
        line-height: 1.625rem;
      }
  }

  ul {
    list-style: none;
  }

  #root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
