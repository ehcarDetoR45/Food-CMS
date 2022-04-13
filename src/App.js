import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Carousel from "./components/Components/Carousel";




export default function App() {
  return (
    <><div className="App">
      
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   <Carousel />
 
    </div>
    </>
  );
}



      


      
