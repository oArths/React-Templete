import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  scroll-behavior: smooth;
  font-family: 'Tajawal';
  margin: 0px;
  padding: 0px;
  border: none; 
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  line-Height: "1.1";
  text-Transform: "none";
  text-Decoration: "none";
  letter-Spacing: "0";
}
img{
  user-select: none; 
  -webkit-user-select: none;
  -webkit-user-drag: none;
}
`;
