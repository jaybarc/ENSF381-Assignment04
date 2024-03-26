import React, { useState } from 'react';
import "./productitem.css";

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className='product-image' />
      <div>
        <h3 onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
          {product.name}
        </h3>
        <p>${product.price}</p>
        {showDetails && <p>{product.description}</p>}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;