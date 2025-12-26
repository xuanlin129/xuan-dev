import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './router/index.js';
import { createGlobalStyle } from 'styled-components';
import styledCss from './styledCss.js';

const GlobalStyle = createGlobalStyle`
  :root {
    ${styledCss}
  }
`;

function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
