import * as sc from "styled-components";

export const Container = sc.styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

export const GlobalStyle = sc.createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    background-color: #1e1f2b;
    color: #fff;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

export const StyledTitle = sc.styled.h1<{ $textBg: string }>`
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 1rem;

  &::before {
    content: "${(props) => props.$textBg}";
    position: absolute;
    color: rgba(255, 255, 255, 0.03);
    font-size: 6.25rem;
    font-weight: 700;
    left: -3.5rem;
    top: -3.5rem;
  }
`;
