import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import { useState } from "react";
import SingleView from "./components/SingleView";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Category"
            element={<Category loading={loading} setLoading={setLoading} />}
          />
          <Route path="/Products" element={<AllProducts />} />
          <Route
            path="/Products/:categoryName"
            element={<Products loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/Products/Single-View/:id"
            element={<SingleView loading={loading} setLoading={setLoading} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
