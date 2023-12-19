"use client"

import { useState } from "react";
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Tambahkan produk ke keranjang terlebih dahulu!");
    } else {

    }
  };

  return (
    <div>
      <main>
        <h1>Produk</h1>
        <ProductList setCart={setCart} />
      </main>

      <ShoppingCart cart={cart} handleCheckout={handleCheckout} />
    </div>
  );
}
