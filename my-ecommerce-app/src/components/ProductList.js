import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ addToCart }) => (
  <div>
    {productsData.map(product => (
      <ProductItem key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;