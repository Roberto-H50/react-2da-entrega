import Navbar from "./components/layouts/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Checkout from "./components/pages/checkout/Checkout";

import {BrowserRouter, Route, Routes} from "react-router";
import CartContextProvider from "./context/CartContext";
//import DarkModeContextProvider from "./context/DarkModeContext";
import { Toaster } from "sonner";


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
    <Toaster duration={2000} richColors />
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

