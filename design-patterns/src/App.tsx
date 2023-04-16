import React from 'react';
// import { RouterProvider } from 'react-router-dom';
import Router from './component/Router';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
