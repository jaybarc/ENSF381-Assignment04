import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove }) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>
      <h3>Total Price: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;