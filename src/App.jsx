import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./components/cart/Cart.jsx";
import Account from "./components/account/Account.jsx";
import Wishlist from "./components/wishlist/wishlist.jsx";
import Shop from "./components/shop/shop.jsx"; 
import Deals from "./components/deals/Deals.jsx";
import New from "./components/new/New.jsx";
import Footer from "./components/footer/Footer";


import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/About";
import Support from "./pages/support/Support";


export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/new" element={<New />} />
      </Routes>
        <Footer />


    </>
  );
}
