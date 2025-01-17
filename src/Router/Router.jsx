import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Basket from "../Components/Pages/Basket/Basket";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
