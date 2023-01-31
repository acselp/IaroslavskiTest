

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
