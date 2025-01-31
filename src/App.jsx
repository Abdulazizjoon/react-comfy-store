import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ErorPage from "./components/ErorPage";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/cart";
import Bag from "./components/bag";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart/:id" element={<Cart />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
        <Route path="*" element={<ErorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
