import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { name, image, price, quantity } = item;
  const totalPrice = price * quantity;

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} className='product-image'/>
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handleRemove} disabled={quantity === 0}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;