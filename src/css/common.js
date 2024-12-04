import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
body {
  font-family: 'Roboto Regular';
  font-size: 18px;
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--main-bg-color);
 }

@media screen and (min-width: 1440px) {
  body {
    height: 100vh;
    max-height: 100vh;
  }
}

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
  margin: 0;
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
  box-shadow: var(--shadow);
  background-color: var(--btn-bg-color);
  color: var( --white-text);
  border-radius: 16px;
  border:none;
   transition: all 0.4s;
    &:hover,
  &:focus {
  background-color: var( --btn-hover-focus-color);
  }

}

svg {
  color: var(--icons-color);
  font-size: 20px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  background-color: inherit !important;
  color: var(--secondary-text);
}
  input{
    border-radius: 16px;
  }



`;

export default Global;
