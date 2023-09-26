//SingleProductCard.jsx
import "../CSS/SingleProductCard.css";
import { Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
function SingleProductCard({ selectedProduct }) {
  if (!selectedProduct) {
    return null; 
  }
  return (
    <div className="returnDetails">
      <div className="single-product-card">
        <h1>Product Details</h1>
        <p>Title: {selectedProduct.title}</p>
        <span className="fa fa-dollar"></span>
        <p>Price: {selectedProduct.price}</p>
        <div className="single-image">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        <p>Category: {selectedProduct.category}</p>
      <p>Description: {selectedProduct.description}</p>
      </div>

       <span className="add-cart">
        <i className="fa fa-shopping-cart"></i>Add TO Cart
      </span>
      <Routes>
        <Route path="single-product-card/*" element={<SingleProductCard />} />
      </Routes>
    </div>
  );
}
SingleProductCard.propTypes = {
  selectedProduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}),
};

export default SingleProductCard;
