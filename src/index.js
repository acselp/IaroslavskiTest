import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ChakraProvider>
  </React.StrictMode>
);

