//AllProducts.jsx
import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import { Routes, Route } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error pulling data", error));
  }, []);
  const handleProductClick = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setSelectedProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  };

  return (
    <div>
      <h1>Hilton</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product.id)}>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
      <SingleProductCard selectedProduct={selectedProduct} />

      <Routes>
        <Route
          path="single-product-card"
          element={<SingleProductCard selectedProduct={selectedProduct} />}
        />

        <Route path="all-products/*" element={<AllProducts />} />
      </Routes>
    </div>
  );
}
