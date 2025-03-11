import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllCoins from "./pages/AllCoins";
import CoinDetails from "./pages/CoinDetails";
import Cart from "./pages/Cart";
import ThemeButton from "./components/ThemeButton";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:coinQuery" element={<AllCoins />} />
        <Route path="/coin/:coinid" element={<CoinDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ThemeButton />
      <Footer />
    </Router>
  );
};

export default App;

// Get Coins
// https://api.coingecko.com/api/v3/coins/${id}
// Search Coin
// https://api.coingecko.com/api/v3/search?query=${query}
// Trending Coins
// https://api.coingecko.com/api/v3/search/trending
