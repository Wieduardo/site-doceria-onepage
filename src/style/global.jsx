import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-background: #fff;
    --color-primary: #FC4F00;
    --color-primary-light: #F79540;
    --color-secondary: #B71375;
    --color-tertiary: #8B1874;
    --color-text: #FFF;
    --color-text2: #252525;
    --color-red: #B4423E; 
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    font-family: 'Barlow Condensed', sans-serif;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-light);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
    cursor: pointer;
  }
`;