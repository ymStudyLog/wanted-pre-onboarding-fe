import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import color from './color';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
  }

  html, #root, body {
  min-height:  100vh;
  }
  
 body {
   margin:0;
   padding:0;
 }

 #root{
  background: ${color.gray[0]};
 }

 
`;

export default GlobalStyles;
