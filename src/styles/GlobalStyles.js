import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #00FFA3;
        --purple: #AA91FB;
        --red: #E23A3A;
        --blue: #14A1F0;
    }
    body {
        background-color: #0E141B;
        color: white;
    }
    a {
        text-decoration: none;
    }
    button {
    background: white;
    color: black;
    border: 0;
    border-radius: 100px;
    height: 37px;
    cursor: pointer;
    transition: 500ms;
    padding: 0 2rem;
    border: transparent 2px solid;
  }
  .full-width {
    left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;
  }
`;

export default GlobalStyles;
