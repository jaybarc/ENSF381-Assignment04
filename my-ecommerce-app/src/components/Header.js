import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
            <img src="/images/logo.png" alt="Logo" className={styles.logo}/>
        </div>
        <div className={styles.right}>
            <h1>Qureshi Innovations Ltd.</h1>
        </div>
      </div>
    
      <nav className={styles.navList}>
        <Link to="/" className={styles.navItem}>Home</Link>
        <Link to="/products" className={styles.navItem}>Products</Link>
        <Link to="/login" className={styles.navItem}>Login</Link>
      </nav>
      
    

    </header>
  );
}

export default Header;