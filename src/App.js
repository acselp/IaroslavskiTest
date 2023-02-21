

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import Price from "./pages/Price/Price";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/contact" element={<Contact />}></Route>


        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
