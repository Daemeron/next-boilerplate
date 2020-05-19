import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

/**
 * TODO: Write tests for <GlobalStyle /> component
 * BODY: Currently react-test-renderer cannot render components created with createGlobalStyle.
 *       When this behaviour get's patched, unit test should be written.
 */
export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
  }
  body {
    font-weight: normal;
    color: #000;
    background-color: #fff;
  }
  ${normalize()}
`;
