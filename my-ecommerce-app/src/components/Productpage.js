import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import "./productpage.css";
import { isAuthenticated } from './auth';
import LoginPage from './LoginPage';

const ProductPage = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Save cart items to local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const onRemove = (id) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === id);
      if (item.quantity > 1) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };

  return (
    <div className="product-page">
      { isAuthenticated() ? (
        <>
          <Header />
          <table>
            <tbody>
              <tr classname="table-row">
                <td><ProductList addToCart={addToCart} /></td>
                <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={onRemove} /></td>
              </tr>
            </tbody>
          </table>
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default ProductPage;

/*import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import "./productpage.css";
import { isAuthenticated } from './auth';
import LoginPage from './LoginPage';

const ProductPage = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Save cart items to local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const onRemove = (id) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === id);
      if (item.quantity > 1) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };

  return (
    <div className="product-page">
      { isAuthenticated() ? (
        <>
          <Header />
          <table>
            <tbody>
              <tr classname="table-row">
                <td><ProductList addToCart={addToCart} /></td>
                <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={onRemove} /></td>
              </tr>
            </tbody>
          </table>
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default ProductPage;*/