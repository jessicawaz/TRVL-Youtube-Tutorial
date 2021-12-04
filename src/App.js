import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import Products from "./components/pages/Products/Products.js";
import Services from "./components/pages/Services/Services.js";
import SignUp from "./components/pages/SignUp/SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
