import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './Components/ProductsPage';
import HomePage from './Components/HomePage';
import Cart from "./Components/Cart";
import Sarees from "./pages/Sarees";
import WesternWear from "./pages/WesternWear.jsx";
import BabyBoy from "./pages/BabyBoy.jsx";
import Kurtis from "./pages/Kurtis.jsx";
import BabyGirls from "./pages/BabyGirls.jsx";
import Mens from "./pages/Mens.jsx";
import Jewelry from "./pages/Jewelry.jsx";
import Shoes_bags from "./pages/Shoes_bags.jsx";
import Health_beauty from "./pages/Health_beauty.jsx";
import HomeApplaienses from "./pages/HomeApplainenses.jsx";
import Homedecor from "./pages/Homedecor.jsx";
import Musical_Instruments from "./pages/Musical_Instruments.jsx";
import Sports_fitness from "./pages/Sports_fitness.jsx";
import Watches from "./pages/Watches.jsx";
import Book from "./pages/Book.jsx";

function App() {

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/westernwear" element={<WesternWear />}/>
          <Route path="/kurtis" element={<Kurtis/>}/>
          <Route path="/mens" element={<Mens/>}/>
          <Route path="/babygirls" element={<BabyGirls/>}/>
          <Route path="/babyboys" element={<BabyBoy/>}/>
          <Route path="/jewelry" element={<Jewelry/>}/>
          <Route path="/shoes_bags" element={<Shoes_bags/>}/>
          <Route path="/health_beauty" element={<Health_beauty/>}/>
          <Route path="/homeapplaienses" element={<HomeApplaienses />}/>
          <Route path="/homedecor" element={<Homedecor/>}/>
          <Route path="/musical_instruments" element={<Musical_Instruments />}/>
          <Route path="/sports_fitness" element={<Sports_fitness/>}/>
          <Route path="/watches" element={<Watches />}/>
          <Route path="/book" element={<Book/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App 