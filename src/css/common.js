import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
body {
  font-family: 'Roboto Regular';
  font-size: 18px;
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--main-bg-color);
  overflow: hidden;
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
  border-radius: 10px;
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
  color: var(--text-forms);
}

@media screen and (min-width: 1440px) {
  body {
    height: 100vh;
    max-height: 100vh;
  }
}

.bubble {
  width: 30px;
  height: 30px;
  background: var(--bubbles-bg-color);
  border-radius: 200px;
  position: absolute;
}

.x1 {
  transform: scale(0.9);
  opacity: 0.2;
  animation: moveBubblesX 15s linear infinite, moveBubblesY 6s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 15s linear infinite, moveBubblesY 6s ease-in-out infinite alternate;
}

.x2 {
  left: 200px;
  transform: scale(0.6);
  opacity: 0.5;
  animation: moveBubblesX 25s linear infinite, moveBubblesY 8s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 25s linear infinite, moveBubblesY 8s ease-in-out infinite alternate;
}

.x3 {
  left: 350px;
  transform: scale(0.8);
  opacity: 0.3;
  animation: moveBubblesX 20s linear infinite, moveBubblesY 4s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 20s linear infinite, moveBubblesY 4s ease-in-out infinite alternate;
}

.x4 {
  left: 470px;
  transform: scale(0.75);
  opacity: 0.35;
  animation: moveBubblesX 18s linear infinite, moveBubblesY 3s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 18s linear infinite, moveBubblesY 3s ease-in-out infinite alternate;
}

.x5 {
  left: 150px;
  transform: scale(0.8);
  opacity: 0.3;
  animation: moveBubblesX 17s linear infinite, moveBubblesY 5s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 17s linear infinite, moveBubblesY 5s ease-in-out infinite alternate;
}

.x6 {
  transform: scale(0.9);
  opacity: 0.2;
  animation: moveBubblesX 15s linear infinite, moveBubblesYOpposite 4s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 15s linear infinite, moveBubblesYOpposite 4s ease-in-out infinite alternate;
}

.x7 {
  left: 200px;
  transform: scale(0.6);
  opacity: 0.5;
  animation: moveBubblesX 21s linear infinite, moveBubblesYOpposite 3s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 21s linear infinite, moveBubblesYOpposite 3s ease-in-out infinite alternate;
}

.x8 {
  left: 350px;
  transform: scale(0.8);
  opacity: 0.3;
  animation: moveBubblesX 16s linear infinite, moveBubblesYOpposite 6s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 16s linear infinite, moveBubblesYOpposite 6s ease-in-out infinite alternate;
}

.x9 {
  left: 470px;
  transform: scale(0.75);
  opacity: 0.35;
  animation: moveBubblesX 24s linear infinite, moveBubblesYOpposite 5s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 24s linear infinite, moveBubblesYOpposite 5s ease-in-out infinite alternate;
}

.x10 {
  left: 150px;
  transform: scale(0.8);
  opacity: 0.3;
  animation: moveBubblesX 17s linear infinite, moveBubblesYOpposite 5s ease-in-out infinite alternate;
  -webkit-animation: moveBubblesX 17s linear infinite, moveBubblesYOpposite 5s ease-in-out infinite alternate;
}

#bubbles {
  height: 100%;
  padding: 150px 0;
}

@keyframes moveBubblesX {
  0% {
    left: -1%;
  }
  100% {
    left: 101%;
  }
}

@keyframes moveBubblesY {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 150px;
  }
}

@keyframes moveBubblesYOpposite {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -100px;
  }
}
`;

export default Global;
