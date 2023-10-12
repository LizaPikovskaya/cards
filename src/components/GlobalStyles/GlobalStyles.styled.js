import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import MontserratMediumWoff from "../../accets/fonts/Montserrat-Medium/Montserrat-Medium.woff";
import MontserratMediumWoff2 from "../../accets/fonts/Montserrat-Medium/Montserrat-Medium.woff2";
import MontserratMediumWoEot from "../../accets/fonts/Montserrat-Medium/Montserrat-Medium.eot";
import MontserratMediumWoTtf from "../../accets/fonts/Montserrat-Medium/Montserrat-Medium.ttf";

import MontserratSemiBoldWoff from "../../accets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff";
import MontserratSemiBoldWoff2 from "../../accets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff2";
import MontserratSemiBoldEot from "../../accets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.eot";
import MontserratSemiBoldTtf from "../../accets/fonts/Montserrat-SemiBold/Montserrat-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumWoff2}) format('woff2'),
         url(${MontserratMediumWoff}) format('woff'),
         url(${MontserratMediumWoEot}) format('embedded-opentype'),
         url(${MontserratMediumWoTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldWoff2}) format('woff2'),
         url(${MontserratSemiBoldWoff}) format('woff'),
         url(${MontserratSemiBoldEot}) format('embedded-opentype'),
         url(${MontserratSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
  font-family: 'Montserrat';
  margin: 0;
  font-weight: 400;
  font-style: normal;
  font-size:18px;
  background-color: #FFFAF0	;
  color: #111111;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  scroll-behavior: smooth;

 }


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
    max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color:inherit;
}


`;
