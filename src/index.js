import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import styled, {createGlobalStyle} from "styled-components"

const Global = createGlobalStyle`
  :root {
  --primary: #0000ff;
  --secondary: #5efc8d;
  --light-gray: #cccccc;
}

body {
  font-family: Helvetica;
}

h3 {
  margin: 0;
  padding: 0;
}
`;

function App() {
  return <Shop />
}

render(
  <>
    <Global />
    <App />
  </>
, document.querySelector("#root"));