import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* 
  https://www.joshwcomeau.com/css/custom-css-reset/
  */
  /*
  1. Use a more-intuitive box-sizing model.
  */

  *, *::before, *::after {
  box-sizing: border-box;
  }
   
  /*
  2. Remove default margin
  */

  * {
  margin: 0;
  }

  /*
  3. Allow percentage-based heights in the application
  */

  html, body, #___gatsby, #gatsby-focus-wrapper {
      height: 100%;
  }
  /*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
  */

  body {
      line-height: 1.625;
      -webkit-font-smoothing: antialiased;
  }

  /*
  6. Improve media defaults
  */

  img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
  }

  /*
  7. Remove built-in form typography styles
  */

  input, button, textarea, select {
      font: inherit;
  }

  /*
  8. Avoid text overflows
  */

  p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
  }

  /*
  9. Create a root stacking context
  */

  #root, #__next, #___gatsby {
      isolation: isolate;
  }

  /********************/
  /* END OF CSS RESET */
  /********************/

  /* Global CSS Variables */

  :root {
    --gray-background: #f0f2f5;
    --white: #fff;
    --blue-ink: #0039a6;
    --box-shadow-paper: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--gray-background);
    font-family: "Rubik", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    background: linear-gradient(
      -100deg,
      hsla(48, 92%, 75%, 0.3),
      hsla(48, 92%, 75%, 0.7) 95%,
      hsla(48, 92%, 75%, 0.1)
    );
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;