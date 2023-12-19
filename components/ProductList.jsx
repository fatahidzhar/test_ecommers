import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {Array.isArray(products) ? (
          products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
