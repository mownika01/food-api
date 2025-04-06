import React from "react";
import Home from "./home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./cuisine";
import Searched from "./searched";
import Recipe from "./recipe";
import {AnimatePresence} from 'framer-motion'

const Pages = () => {

  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/search/:item" element={<Searched />}/>
        <Route path="/recipe/:detail" element={<Recipe />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default Pages;
