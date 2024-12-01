import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`


h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}


body{
  font-family: 'Roboto Regular';
  font-size: 18px;
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--bcgclr);
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    background-color: inherit !important;
    color: var(--text-forms);
}

@media screen and (min-width: 1440px) {
  body {
    height: 100vh;
    max-height: 100vh;
  }
 
}
 
`;

export default Global;
