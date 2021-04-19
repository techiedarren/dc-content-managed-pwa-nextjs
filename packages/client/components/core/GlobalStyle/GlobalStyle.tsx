import { createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const GlobalStyle = createGlobalStyle`
    a,a:hover,a:active,a:visited {
        text-decoration: none;
        * {
            text-decoration: none;
        }
    }

    a:visited {
        color: currentColor;
    }
`;

export default () => <>
    <GlobalStyle />
    <CssBaseline />
</>;