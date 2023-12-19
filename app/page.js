import { useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";

const Home = ({ products }) => {
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Silakan pilih produk terlebih dahulu.");
    } else {

    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
      <ShoppingCart cart={cart} onCheckout={handleCheckout} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get("https://dummyjson.com/products");
  const products = res.data.slice(0, 10);

  return {
    props: {
      products,
    },
  };
}

export default Home;
