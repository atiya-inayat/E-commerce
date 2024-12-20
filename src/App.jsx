import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Hero from "./components/Hello/Hero";
import Popular from "./components/Popular/Popular";
import Shop from "./pages/Shop";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Shop /> */}
        {/* <Hero/> */}
        {/* <Popular/> */}

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<product />} />
          <Route path=":productid" element={<product />} />

          <Route path="/cart" element={<cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
