import React from 'react';
import ss from './components/Header.css';

function Header() {
  return (
    <header className={ss.header}>
        <div className={ss.left}>
            <img src="/images/logo.png" alt="Logo" className={ss.logo}/>
        </div>
        <div className={ss.right}>
            <h1>Qureshi Innovations Ltd.</h1>
        </div>

    </header>
  );
}

export default Header;