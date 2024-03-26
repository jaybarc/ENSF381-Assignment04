import React from 'react';
import styles from './Header.module.css';

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
    
      <nav>
         <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/">Home</a></li>
            <li className={styles.navItem}><a href='/'>Products</a></li>
            <li className={styles.navItem}><a href="/">Login</a></li>
          </ul>
      </nav>
      
    

    </header>
  );
}

export default Header;