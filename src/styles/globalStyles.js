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
  
 body {
   min-height: 100vh;
   margin:0;
   padding:0;
 }

 #root{
  min-height: 100vh;
  background: ${color.gray[0]};
 }

 html{
  min-height:  100vh;
 }
`;

export default GlobalStyles;
