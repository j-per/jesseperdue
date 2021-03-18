import { createGlobalStyle } from 'styled-components';
import '@fontsource/alata';

const Typography = createGlobalStyle`
    html {
        font-family: 'Alata';
        color: var(--textGray);
    }
    h1 {
        font-weight: 700;
        margin: 0;
        font-size: 40px;
    }
    h2 {
        margin: 0;
        font-size: 40px;
    }
`;

export default Typography;
